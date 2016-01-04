'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var shell = require('gulp-shell')
var awspublish = require('gulp-awspublish');

var SRC_DIR = './src';
var DIST_DIR = './build';

gulp.task('compile:html', function() {
  // コピーするだけ
  return gulp.src([SRC_DIR + '/**/*.html'], {base: 'src'})
  .pipe(gulp.dest(DIST_DIR));
});

gulp.task('compile:json', function() {
  // コピーするだけ
  return gulp.src([SRC_DIR + '/**/*.json'], {base: 'src'})
  .pipe(gulp.dest(DIST_DIR));
});

// TODO: cssのビルドが必要なら追加する

gulp.task('clean', shell.task([
  'rm -rf ./build'
]));

gulp.task('compile:js:development', shell.task([
  './node_modules/.bin/webpack -d'
]));

gulp.task('compile:js:production', shell.task([
  './node_modules/.bin/webpack -p'
]));

gulp.task('watch', function() {
  gulp.watch(SRC_DIR + '/**/*.html', ['compile:html']);
  gulp.watch(SRC_DIR + '/**/*.json', ['compile:json']);
  gulp.watch(SRC_DIR + '/**/*.js',   ['compile:js:development']);
  gulp.watch(SRC_DIR + '/**/*.jsx',  ['compile:js:development']);
});

gulp.task('start-dev-server', shell.task([
  './node_modules/.bin/http-server ./build/'
]));

gulp.task('build:development', function(callback) {
  runSequence(
    'clean',
    'compile:html',
    'compile:json',
    'compile:js:development',
    callback
  );
});

gulp.task('build:production', function(callback) {
  runSequence(
    'clean',
    'compile:html',
    'compile:js:production',
    callback
  );
});

gulp.task('server', function(callback) {
  runSequence(
    'build:development',
    'watch',
    'start-dev-server',
    callback
  );
});

gulp.task('deploy', function(callback) {
  runSequence(
    'build:production',
    'publish',
    callback
  );
});

gulp.task('publish', function() {
  var publisher = awspublish.create({
    region: 'xxxx',
    accessKeyId: 'xxxx',
    secretAccessKey: 'xxxx',
    params: {
      Bucket: 'xxxx'
    }
  });
 
  var headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
    // ...
  };
 
  return gulp.src('./build/**/*')
    // gzip, Set Content-Encoding headers and add .gz extension
    // .pipe(awspublish.gzip({ ext: '.gz' }))
 
    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
    // .pipe(publisher.publish(headers))
    // create a cache file to speed up consecutive uploads
    .pipe(publisher.cache())
     // print upload updates to console
    .pipe(awspublish.reporter());
});

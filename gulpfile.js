'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var shell = require('gulp-shell')

// deploy
var awspublish = require('gulp-awspublish');

// asset
var rev = require('gulp-rev');
var fs = require('fs');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

var SRC_DIR = './src';
var DIST_DIR = './build';

gulp.task('compile:html', function() {
  var handlebarOpts = {
    helpers: {
      assetPath: function(path, context) {
        return ['/js', context.data.root[path]].join('/');
      }
    }
  };
  var manifest = JSON.parse(fs.readFileSync('./build/rev-manifest.json', 'utf8'));
  
  // read in our handlebars template, compile it using
  // our manifest, and output it to index.html
  return gulp.src('src/index.hbs', {base: 'src'})
    .pipe(handlebars(manifest, handlebarOpts))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('build'));
});

gulp.task('compile:json', function() {
  // copy only
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

gulp.task('assets:manifest', function () {
  return gulp.src(['build/js/application.js'])
    .pipe(rev())
    .pipe(rev.manifest())
    .pipe(gulp.dest('build/')); // write manifest to build dir
});

gulp.task('assets:js', function(){
  // add asset hash to build js
  return gulp.src('build/js/application.js')
    .pipe(rev())
    .pipe(gulp.dest('build/js'));
});

gulp.task('rm_extra_file:production', shell.task([
  'rm ./build/js/application.js',
  'rm ./build/rev-manifest.json'
]));

gulp.task('rm_extra_file:deploy', shell.task([
  'rm ./build/ranking.json'
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
    'compile:js:development',
    'assets:manifest',
    'assets:js',
    'compile:html',
    'compile:json',
    callback
  );
});

gulp.task('build:production', function(callback) {
  runSequence(
    'clean',
    'compile:js:production',
    'assets:manifest',
    'assets:js',
    'compile:html',
    'compile:json',
    'rm_extra_file:production',
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
    'rm_extra_file:deploy',
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
  };
  
  return gulp.src('./build/**/*')
  // gzip, Set Content-Encoding headers and add .gz extension
  // .pipe(awspublish.gzip({ ext: '.gz' }))
  
  // publisher will add Content-Length, Content-Type and headers specified above
  // If not specified it will set x-amz-acl to public-read by default
  .pipe(publisher.publish(headers))
  // create a cache file to speed up consecutive uploads
  .pipe(publisher.cache())
  // print upload updates to console
  .pipe(awspublish.reporter());
});

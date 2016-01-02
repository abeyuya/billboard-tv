'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var shell = require('gulp-shell')

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
    'compile:json',
    'compile:js:production',
    callback
  );
});

gulp.task('server', function() {
  runSequence(
    'build:development',
    'watch',
    'start-dev-server'
  );
});

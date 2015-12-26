'use strict';

var fs          = require('fs');
var _           = require('underscore');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var gutil       = require('gulp-util');
var plumber     = require('gulp-plumber');
var reactify    = require('reactify');
var browserify  = require('browserify');
var streamify   = require('gulp-streamify');
var uglify      = require('gulp-uglify');
var source      = require('vinyl-source-stream');
var connect     = require('gulp-connect');
var runSequence = require('run-sequence');
var packageJson = require('./package.json');
var rimraf      = require('rimraf');

var SRC_DIR = './src';
var DIST_DIR = './build';
var BUILD_TARGET_JS_FILES = ['app'];

/**
 * browserify
 */
gulp.task('browserify', function() {
  _.each(BUILD_TARGET_JS_FILES, function(name) {
    return browserify({
      entries: [SRC_DIR + '/js/' + name + '.js'],
      transform: [reactify],
      paths: packageJson.browserify.paths,
      debug: packageJson.browserify.debug
    })
      .bundle()
      .on('error', errorHandler)
      .pipe(source(name + '.js'))
      .pipe(gulpif(true, streamify(uglify({ mangle: false })))) // gulpif true なら jsのminifyをする
      .pipe(gulp.dest(DIST_DIR + '/js'));
  });
});

gulp.task('copy', function() {
  return gulp.src(['src/**/*.html'])
             .pipe(gulp.dest(DIST_DIR));
});

/**
* error handler
*/
var errorHandler = function(error) {
  gutil.log(gutil.colors.red(error));
};

/**
* clean
*/
gulp.task('clean', function() {
  rimraf(DIST_DIR, {}, function(){});
});

/**
* connect
*/
gulp.task('connect', function() {
  connect.server({
    root: DIST_DIR,
    livereload: true,
    port: 8080
  });
});

/**
* watch
*/
gulp.task('watch', function() {
  gulp.watch(SRC_DIR + '/**/*.js', ['browserify']);
  gulp.watch(SRC_DIR + '/**/*.jsx', ['browserify']);
});


/**
* tasks
*/
gulp.task('default', function() {});

gulp.task('build', function(callback) {
  runSequence(
    'clean',
    'copy',
    'browserify',
    callback
  );
});

gulp.task('develop', function(callback) {
  runSequence(
    'build',
    'connect',
    'watch',
    callback
  );
});

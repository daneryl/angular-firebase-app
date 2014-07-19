'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep');

gulp.task('jshint', function() {

  var testFiles = [
    'app/scripts/**/*.js',
    'test/unit/**/*.js'
  ];

  return gulp.src(testFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .on('error', function(err) {
      throw err;
    });
});

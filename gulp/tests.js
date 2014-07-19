'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep');

gulp.task('test', function() {
  var bowerDeps = wiredep({
    directory: 'app/bower_components',
    exclude: ['bootstrap-sass-official'],
    dependencies: true,
    devDependencies: true
  });

  var testFiles = bowerDeps.js.concat([
    'app/scripts/**/*.js',
    'app/scripts/**/specs/**.js',
  ]);

  return gulp.src(testFiles)
    .pipe($.karma({
      configFile: './karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      throw err;
    });
});

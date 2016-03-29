'use strict';

var config = require('../config');
var gulp   = require('gulp');
// jshint是一个侦测javascript代码中错误和潜在问题的工具
//var jshint = require('gulp-jshint');
var eslint = require('gulp-eslint');

gulp.task('lint', function() {
  return gulp.src([config.scripts.src])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});
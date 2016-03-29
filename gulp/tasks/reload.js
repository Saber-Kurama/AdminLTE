'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').get('saber');

gulp.task('reload', function() {
  browserSync.reload();

});
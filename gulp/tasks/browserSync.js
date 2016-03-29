'use strict';
// 浏览器同步工具
var config      = require('../config');
var browserSync = require('browser-sync').create('saber');
var gulp        = require('gulp');

gulp.task('browserSync', function() {

  browserSync.init({
    proxy: 'localhost:' + config.serverport
  });

});
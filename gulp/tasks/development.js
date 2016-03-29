'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');
//var browserSync = require('browser-sync');
// 开发任务
gulp.task('dev', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = false;

  //runSequence('lib','copycss','copyfonts','styles', 'images', 'views', 'scripts', 'watch', cb);
  runSequence('lib', 'images', 'tmodtpl', 'copyfonts', 'styles','views','scripts','watch', cb);

});

// gulp.task('deving',[],function(){
// 	global.isProd = false;
// 	//console.log(browserSync.get('ss'));
// 	runSequence('copy','styles','images','views','browserify');
// })
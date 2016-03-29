'use strict';

var gulp = require('gulp');
var config = require('../config');
var rev = require('gulp-rev');
// 创建一个 copycss 任务
gulp.task("copycss",function(){
	return gulp.src(config.copycss.src)
				//.pipe(rev())
			   .pipe(gulp.dest(config.copycss.dest));
})
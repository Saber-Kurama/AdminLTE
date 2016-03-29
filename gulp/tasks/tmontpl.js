'use strict';

var gulp = require('gulp');
var config = require('../config');
var tmodjs = require('gulp-tmod');
// 创建一个 tmodtpl 任务
gulp.task("tmodtpl",function(){
	return gulp.src(config.tmodtpl.src)
				.pipe(tmodjs({
					base: "src/tpl",
                	combo: true,
                	output: config.tmodtpl.dest
				}))
				// .pipe( revCollector({
				// 	replaceReved: true,
				// 	dirReplacements: {
 		 //               'css/': "css/"
 		 //            }
				// }))
			   //.pipe(gulp.dest(config.views.dest));
})
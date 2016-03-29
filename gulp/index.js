"use strict";
// 引入文件读取模块
var fs = require("fs");
// 同步读取目录 gulp/tasks
var tasks = fs.readdirSync("./gulp/tasks/");
// 循环加载每个任务
tasks.forEach(function(task){
	require("./tasks/"+task);
})
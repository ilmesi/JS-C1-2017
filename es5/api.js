var request = require('request');
var Task = require('./Task');
var TaskList = require('./TaskList');


var taskList = TaskList('API Tasks');

console.log('---BEGIN---');
request("http://localhost:3000/tasks", function (error, response, body) {
  body = JSON.parse(body);

  for (var i = 0; i < body.length; i++) {
    var task = new Task(body[i].id, body[i].name);
    taskList.addTask(task);
  }
  console.log('---END---');
  console.log(taskList);
})
console.log('---END?---');
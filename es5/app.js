var tasks = require('./Task');
var TaskList = require('./TaskList');

var task1 = new tasks.Task(1, 'Tarea 1');

var task2 = new tasks.Task(2, 'Tarea 2');

var task3 = new tasks.Task(3, 'Tarea 3');
task3.complete();

var taskList = TaskList('Semana 1');
taskList.addTask(task1);
taskList.addTask(task2);
taskList.addTask(task3);

console.log(taskList);

taskList.removeTask(2);

console.log(taskList);

console.log(taskList.finishedTasks());

console.log(taskList.finishedTasksV2());

console.log(taskList.summary());
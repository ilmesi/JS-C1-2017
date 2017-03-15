import Task from './Task.js';
import TaskList from './TaskList.js';

var task1 = new Task(1, 'Tarea 1');

var task2 = new Task(2, 'Tarea 2');

var task3 = new Task(3, 'Tarea 3');
task3.complete();

var taskList = new TaskList('Semana 1');
taskList.addTask(task1);
taskList.addTask(task2);
taskList.addTask(task3);

console.log(taskList);

taskList.removeTask(2);

console.log(taskList);

console.log(taskList.finishedTasks());

console.log(taskList.finishedTasksV2());

console.log(taskList.summary());
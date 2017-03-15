import 'isomorphic-fetch';
import Task from './Task.js';
import TaskList from './TaskList.js';


var taskList = new TaskList('Semana 1');

console.log('---BEGIN---');
fetch('http://localhost:3000/tasks')
  .then(function(response) {
    return response.json();
  })
  .then(function(tasks) {
    tasks.forEach(task => {
      let taskObject = new Task(task.id, task.name);
      taskList.addTask(taskObject);
    });
    console.log('---END---');
    console.log(taskList);
  });
console.log('---END?---');
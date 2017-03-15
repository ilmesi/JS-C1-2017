export default class TaskList {

  constructor (name='') {
      this.name = name;
      this.items = [];
  }

  addTask (task) {
    this.items.push(task);
  }

  removeTask (taskId) {
    this.items = this.items.filter(
      item => item.id !== taskId
    );
  }

  finishedTasks () {
    const items = this.items.filter(
      item => item.status === 'completed'
    );
    return items.length;
  }

  summary () {
    let summary = {};
    for (let item of this.items) {
      let subtotal = summary[item.status] || 0;
      summary[item.status] = subtotal + 1;
    }
    return summary;
  }

  finishedTasksV2 () {
    let { completed } = this.summary();
    return completed;
  }
}
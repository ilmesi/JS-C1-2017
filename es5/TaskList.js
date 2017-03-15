module.exports = function (name) {
  return {
    name: name || '',
    items: [],
    addTask: function (task) {
      this.items.push(task);
    },
    removeTask: function (taskId) {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].id === taskId) {
          this.items.splice(i--, 1);
          return;
        }
      }
    },
    finishedTasks () {
      var finished = 0;
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].status === 'completed') {
          finished += 1;
        }
      }
      return finished;
    },
    summary () {
      var summary = {};
      for (var i = 0; i < this.items.length; i++) {
        var subtotal = summary[this.items[i].status] || 0;
        summary[this.items[i].status] = subtotal + 1;
      }
      return summary;
    },
    finishedTasksV2 () {
      var summary = this.summary();
      return summary['completed'];
    }
  }
};
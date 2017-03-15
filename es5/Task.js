function Task (id, name) {
  this.id = id || 0;
  this.name = name || '';
  this.status = 'initial';
}

Task.prototype.complete = function () {
  this.status = 'completed';
};

module.exports.Task = Task;
export default class Task {

  constructor (id=0, name='') {
      this.id = id;
      this.name = name;
      this.status = 'initial';
  }

  complete () {
    this.status = 'completed';
  }

}
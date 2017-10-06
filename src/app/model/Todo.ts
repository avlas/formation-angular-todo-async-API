export class Todo {
  constructor(public title: string,
              public isDone?: boolean,
              public id?: number) {

  }

  toString () {
      return `${this.id} | ${this.title} | ${this.isDone}`;
  }

  print () {
      console.log( this.toString() );
  }
}

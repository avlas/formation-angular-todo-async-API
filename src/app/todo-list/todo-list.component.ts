import {Component, Input, OnInit} from '@angular/core';
import { Todo } from '../model/Todo';
import { TodosBusinessService } from '../services/todos-business.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [ TodosBusinessService ]
})
export class TodoListComponent implements OnInit {

    @Input()
    todos: Array <Todo>;

    constructor( private todosBusinessService: TodosBusinessService ) {}

    handleModifToto(todo): void {
          console.log('todo : ', todo.toString());
    }

    ngOnInit() {

    }
}

import { Component, OnInit } from '@angular/core';
import { TodosBusinessService } from './services/todos-business.service';
import { Todo } from './model/Todo';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ TodosBusinessService ]
})
export class AppComponent implements OnInit {
    title = 'app';

    todos: Array <Todo> = [];

    constructor( private todosBusinessService: TodosBusinessService ) {}

    ngOnInit() {
        this.todosBusinessService.getTodos()
        .then(
        (serviceTodos) => { this.todos = serviceTodos; }
        );
    }

    handleAdd(todo): void {
        this.todosBusinessService.addToList(todo)
        .then(
            (serviceTodos) => { this.todos = serviceTodos; }
        );
    }

    handleReset(): void {
        this.todosBusinessService.resetList()
        .then(
            (serviceTodos) => {this.todos = serviceTodos; }
        );
    }
}

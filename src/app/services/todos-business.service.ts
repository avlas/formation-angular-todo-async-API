import { Injectable } from '@angular/core';
import { TodosApiService } from '../api/todos-api.service';
import { Todo } from '../model/Todo';

@Injectable()
export class TodosBusinessService {
    todos: Array<Todo> = [];

    constructor (private todosApiService: TodosApiService) { }

    getTodos(): Promise <Array <Todo> >  {
        return new Promise(
            resolve => {
                this.todosApiService.getTodos()
                .then(
                    (apiTodos) => {

                         this.todos = [...apiTodos];
                         resolve ( this.todos );
                    }
                )
            }
        );
    }

    addToList(todo): Promise  <Array <Todo> > {
        return new Promise(
            (resolve, reject) => {
                this.todosApiService.addTodo(todo)
                .then(
                    (apiTodo) => {
                        //this.todos = [todo,...this.todos];

                        this.todos.push(apiTodo);
                        resolve ( this.todos );
                    }
                )
                .catch(
                    (message) => {
                        reject ( 'SERVICE - Impossible to add !!' );
                    }
                );
            }
        );
    }

    resetList(): Promise  <Array <Todo> > {
        return new Promise(
            (resolve, reject) => {
                this.todosApiService.deleteTodos()
                .then(
                    (apiTodos) => {
                        this.todos = [ ];

                        resolve ( this.todos );
                    }
                )
                .catch(
                    (message) => {
                        reject ( 'SERVICE - Impossible to delete !!' );
                    }
                );
            }
        );
    }
}

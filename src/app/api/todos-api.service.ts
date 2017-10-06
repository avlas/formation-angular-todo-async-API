import { Todo } from '../model/Todo';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Injectable} from '@angular/core';

const API_BASE_URL = 'http://localhost:3000/';
const API_TODOS = 'todos/';

@Injectable()
export class TodosApiService {

    todoList: Array<Todo> = [];

    constructor (private httpClient: HttpClient) { }

    // // ASYNCHRONE
     getTodos(): Promise <Array <Todo> > {

         return this.httpClient.get(`${API_BASE_URL}${API_TODOS}`).toPromise();

        // return new Promise(
        //     resolve => {
        //         this.httpClient.get(`${API_BASE_URL}${API_TODOS}`)
        //         .subscribe(
        //             (result: Array <Todo> ) => {
        //                 console.log('next');
        //                 console.log('result', result);
        //                 return this.todoList[0]; OU return this.todoList.next(this.result)
        //             },
        //             (e) => {
        //                 console.log('error', e.message);
        //             },
        //             () => {
        //                 console.log('complete');
        //             }
        //         );
        //     }
        // );
    }

    // // ASYNCHRONE
    deleteTodos(): Promise <any> {
        return this.httpClient.delete(`${API_BASE_URL}${API_TODOS}`).toPromise();
    }

    // ASYNCHRONE
    addTodo(todo): Promise <Todo> {

        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.httpClient.post(`${API_BASE_URL}${API_TODOS}`, todo, { headers} ).toPromise();
        // .subscribe(
        //     (createdTodo: Todo ) => {
        //         console.log('next');
        //         console.log('response', response);
        //         this.todoList = result;
        //         return this.todoList[0];
        //     },
        //     (e) => {
        //         console.log('error', e.message);
        //     },
        //     () => {
        //         console.log('complete');
        //     }
        // );
    }

   // ASYNCHRONE
    getTodoById(id): Promise <any>  {
        // const params = new HttpParams().set('id', id);
        // this.httpClient.get(`${API_BASE_URL}${API_TODOS}`, { params })

         return this.httpClient.get(`${API_BASE_URL}${API_TODOS}${id}`).toPromise();
    }

    // ASYNCHRONE
    updateById(id, todo): Promise <any>  {
        const params = new HttpParams().set('id', id);
        return this.httpClient.put(`${API_BASE_URL}${API_TODOS}`, todo, {params}).toPromise();
    }

    // ASYNCHRONE
    deleteById(id): Promise <any>  {
        const params = new HttpParams().set('id', id);
        return this.httpClient.delete(`${API_BASE_URL}${API_TODOS}`, {params}).toPromise();
    }
}

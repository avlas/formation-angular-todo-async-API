// import { TestBed, inject } from '@angular/core/testing';
// import { TodosApiService } from './todos-api.service';
// import { HttpClientModule } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';
// import { Todo } from '../model/Todo';
//
// describe('TodosApiService', () => {
//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [ HttpClientModule ],
//             providers: [ TodosApiService ]
//         });
//     });
//
//     it('should be created',
//         inject([ TodosApiService ],
//         (todosApiService: TodosApiService) => {
//                 expect(todosApiService).toBeTruthy();
//             }
//     ));
//
//     it('should retrieve todos from API',
//         inject([ TodosApiService ],
//         (todosApiService: TodosApiService) => {
//
//             todosApiService.getTodos()
//             .subscribe(
//                 (result: Array <Todo> ) => {
//                     console.log('next');
//                     console.log('response', result);
//                     this.todoList = result;
//                     return this.todoList;
//                     // expect(result.login).toBe('nartawak');
//                 },
//                 (e) => {
//                     console.log('error', e.message);
//                    // fail('Do not fail');
//                 },
//                 () => {
//                     console.log('complete');
//                 }
//             );
//         }
//     ));
// });

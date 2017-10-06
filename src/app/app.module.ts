import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { HeaderInterceptorService } from './services/interceptors/header-interceptor.service';
import { ErrorInterceptorService } from './services/interceptors/error-interceptor.service';
import { TodosApiService } from './api/todos-api.service';
// import { MockTodosApiService } from './api/MockTodosApiService';

@NgModule({
      declarations: [
          AppComponent,
          TodoListComponent,
          TodoItemComponent,
          TodoFormComponent
      ],
      imports: [
          BrowserModule,
          FormsModule,
          HttpClientModule
      ],
      providers: [
          TodosApiService,
        // { provide: TodosApiService, useFactory: () => condition ? new TodosApiService() : new MockTodosApiService()},
          { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorService, multi: true },
          { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true }
      ],
      bootstrap: [AppComponent]
})
export class AppModule { }

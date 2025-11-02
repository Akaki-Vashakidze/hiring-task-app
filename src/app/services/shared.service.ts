import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/posts.interface';
import { User } from '../interfaces/users.interface';
import { environment } from '../../environments/environment';
import { Todo } from '../interfaces/todos.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  //ყველა პოსტი იმიტომ მომაქვს რომ მეთოდი ვერ ვნახე როგორ უნდა მოიტანოს კონკრეტული user-ის პოსტი
  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`);
  }

  //ყველა Todo იმიტომ მომაქვს რომ მეთოდი ვერ ვნახე როგორ უნდა მოიტანოს კონკრეტული user-ის Todos
  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}/todos`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
}

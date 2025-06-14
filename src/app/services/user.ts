import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserResponse } from '../types/UserResponse';
import { PostResponse } from '../types/PostResponse';
import { TodoResponse } from '../types/TodoResponse';


@Injectable({
  providedIn: 'root'
})
export class User {
  private usersApiUrl = 'https://jsonplaceholder.typicode.com/users'
  private postsApiUrl = 'https://jsonplaceholder.typicode.com/posts'
  private todoApiUrl = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http: HttpClient) { };

  getUsers(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(this.usersApiUrl)
  }
  
  getPosts(): Observable<PostResponse[]> {
    return this.http.get<PostResponse[]>(this.postsApiUrl)
  }

  getUserPosts(userId: number): Observable<PostResponse[]> {
    return this.http.get<PostResponse[]>(`${this.postsApiUrl}?userId=${userId}`)
  }

  getUserTodo(userId: number): Observable<TodoResponse[]> {
    return this.http.get<TodoResponse[]>(`${this.todoApiUrl}?userId=${userId}`)
  }
}

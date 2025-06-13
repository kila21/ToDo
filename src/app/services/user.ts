import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponse } from '../types/UserResponse';
import { Observable } from 'rxjs';
import { PostResponse } from '../types/PostResponse';

@Injectable({
  providedIn: 'root'
})
export class User {
  private usersApiUrl = 'https://jsonplaceholder.typicode.com/users'
  private postsApiUrl = 'https://jsonplaceholder.typicode.com/posts'

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
}

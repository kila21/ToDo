import { Routes } from '@angular/router';
import { Users } from './components/users/users';
import { Posts } from './components/posts/posts';
import { UserPosts } from './components/user-posts/user-posts';
import { Todo } from './components/todo/todo';

export const routes: Routes = [
    {path: 'users', component: Users},
    {path: 'posts', component: Posts},
    {path: 'posts/:id', component: UserPosts},
    {path: 'todo/:id', component: Todo }
];

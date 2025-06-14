import { Routes } from '@angular/router';
import { Posts } from './components/posts/posts';
import { UserPosts } from './components/user-posts/user-posts';
import { Todo } from './components/todo/todo';
import { Table } from './components/table/table';

export const routes: Routes = [
    {path: 'users', component: Table},
    {path: 'posts', component: Posts},
    {path: 'posts/:id', component: UserPosts},
    {path: 'todo/:id', component: Todo }
];

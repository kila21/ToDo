import { Routes } from '@angular/router';
import { Users } from './components/users/users';
import { Table } from './components/table/table';
import { Posts } from './components/posts/posts';
import { UserPosts } from './components/user-posts/user-posts';

export const routes: Routes = [
    {path: '', component: Table},
    {path: 'users', component: Users},
    {path: 'posts', component: Posts},
    {path: 'posts/:id', component: UserPosts}
];

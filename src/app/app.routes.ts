import { Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
    {
        path: 'posts',
        component: PostsComponent,
        title: 'Posts'
    },
    {
        path: 'users',
        component: UsersComponent,
        title: 'Users'
    },
];

import { Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { TodosComponent } from './components/todos/todos.component';
import { PromotionsComponent } from './components/promotions/promotions.component';

export const routes: Routes = [
    {
    path: 'posts',
    title: 'Posts',
    children: [
        { path: '', component: PostsComponent },
        { path: ':userId', component: PostsComponent }
    ]
    },
    {
        path: 'todos/:userId',
        component: TodosComponent,
        title: 'Todos'
    },
    {
        path: 'users',
        component: UsersComponent,
        title: 'Users'
    },
    {
        path: 'promotions',
        component: PromotionsComponent,
        title: 'Promotions'
    },
];

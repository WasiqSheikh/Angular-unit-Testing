import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./components/comment/comment.component').then(m => m.CommentComponent)}
];

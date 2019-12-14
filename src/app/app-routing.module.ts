import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CommentComponent } from './pages/comment/comment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comment', component: CommentComponent },
  { path: 'comment/:id', component: CommentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

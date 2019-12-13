import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RandomCommentComponent } from './pages/random-comment/random-comment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comment', component: RandomCommentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

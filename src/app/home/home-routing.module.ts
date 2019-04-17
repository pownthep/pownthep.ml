import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {path: 'home',  component: HomeComponent},
  {path: 'home/:id',  component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

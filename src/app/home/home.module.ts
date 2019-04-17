import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { MdToHtmlPipe } from '../pipes/md-to-html.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    ContentComponent,
    MdToHtmlPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }

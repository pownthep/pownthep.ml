import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content/content.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { ContentDetailsComponent } from './content-details/content-details.component';
import { BrowserTransferStateModule, BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ContentComponent,
    ContentDetailsComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    BrowserModule.withServerTransition({ appId: 'blog' }),
    BrowserTransferStateModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ]
})
export class ContentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content/content.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { ContentDetailsComponent } from './content-details/content-details.component';
import { BrowserTransferStateModule, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentListComponent } from './content-list/content-list.component';

@NgModule({
  declarations: [
    ContentComponent,
    ContentDetailsComponent,
    ContentListComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    BrowserModule.withServerTransition({ appId: 'blog' }),
    BrowserTransferStateModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    BrowserAnimationsModule
  ]
})
export class ContentModule { }

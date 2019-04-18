import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import * as marked from 'marked';
import { from , Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Entry } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = contentful.createClient({
    space: '55zfyknr6w3w',
    accessToken: '70cfc13965798847fd4cef58667aaf5f0f786bc1b3bc6afacdf8b80f71e70472'
  })

  constructor() { }

  // console logs a response for debugging
  logContent(contentId) {
     this.client.getEntry(contentId)
      .then(entry => console.log(entry) )
  }

  // retrieves content mapped to its data fields
  getContent(contentId) {
    const promise = this.client.getEntry(contentId)
    return from(promise).pipe(map(entry => entry.fields))
  }

  // convert markdown string to 
  markdownToHtml(md: string) {
    return marked(md)
  }
  getPosts(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'tutorial'
    }, query))
      .then(res => res.items);
  }
}

  

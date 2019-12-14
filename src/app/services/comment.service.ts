import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICommentsHttp } from '../models/http-models/comment-http.interface';
import { Observable } from 'rxjs';

@Injectable()
export class CommentService {

  constructor(private _http: HttpClient) { }

  /**
   * TODO: getRandomComment
   * Gets a comment randomly
   * @returns comment model
   */
  public getRandomComment(post_id: string): Observable<ICommentsHttp> {
    return this._http.get<ICommentsHttp>(`post?id=${post_id}`)
  }
}

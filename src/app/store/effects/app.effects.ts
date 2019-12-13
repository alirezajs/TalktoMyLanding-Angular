import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { CommentService } from 'src/app/services/comment.service';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import IAppState from '../state/app.state';
import * as AppActions from '../actions/app.actions'
import { ICommentsHttp } from 'src/app/models/http-models/comment-http.interface';

@Injectable()
export class HomeEffects {
    getComment$: Observable<Action> = createEffect(() =>
        this._actions$.pipe(
            ofType(AppActions.GetCommentAction),
            mergeMap((action) => this._commentService.getRandomComment('5')
                .pipe(
                    map((data: ICommentsHttp) => {
                        return AppActions.GetCommentSuccessAction({ payload: data })
                    }),
                    catchError((error: Error) => {
                        return of(AppActions.GetCommentErrorAction(error));
                    })
                )
            )
        )
    );

    constructor(
        private _commentService: CommentService,
        private _actions$: Actions, ) { }
}

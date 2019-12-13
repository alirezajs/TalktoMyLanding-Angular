import { createAction, props } from '@ngrx/store'
import { IComment } from 'src/app/models/comment.interface';
import { ICommentsHttp } from 'src/app/models/http-models/comment-http.interface';

export const GetCommentAction = createAction(
    '[Comment Component] Get Comment',
    props<{ payload: number }>())
export const GetCommentSuccessAction = createAction(
    '[Comment Component] - Get Comment Suecess',
    props<{ payload: any }>()
);
export const GetCommentErrorAction = createAction(
    '[Comment Component] - Error',
    props<Error>());

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
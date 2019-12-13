import { createReducer, Action, on } from "@ngrx/store";
import * as AppActions from '../actions/app.actions'
import IAppState, { initialAppState } from '../state/app.state';
import { IComment } from 'src/app/models/comment.interface';


export const initialState = initialAppState();
const reducer = createReducer(
    initialState,
    on(AppActions.GetCommentAction, state => state),
    on(AppActions.GetCommentSuccessAction, (state: IAppState, { payload }) => {
        return { ...state, comment: payload }
    }),
    on(AppActions.GetCommentErrorAction, (state: IAppState, error: Error) => {
        return { ...state, CommentError: error };
    })
)

export function AppReducer(state: IAppState | undefined, action: Action) {
    return reducer(state, action);
}
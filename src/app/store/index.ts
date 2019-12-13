import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppReducer } from './reducers/app.reducer';

export interface State {
}

export const reducers: ActionReducerMap<State> = {
  appReducer: AppReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

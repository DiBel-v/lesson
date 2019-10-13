import { tasksFeatureKey, reducer as taskReducer, State as TaskState } from './../tasks.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
export const stateFeatureKey = 'state';

export interface State {
  [tasksFeatureKey]: TaskState,
}

export const reducers: ActionReducerMap<State> = {
[tasksFeatureKey]: taskReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

const selectTasks = (state: State) => state[tasksFeatureKey];
export const selectTasksLoading = createSelector(
  selectTasks,
  (state: TaskState) => state.loading,
);

export const selectTaskEntities = createSelector(
  selectTasks,
  (state: TaskState) => state.entities,
);

export const selectTask = createSelector(
  selectTasks,
  (state: TaskState, id: number) => state.entities.find(element => element.id === +id),
);
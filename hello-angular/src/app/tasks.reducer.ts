import { Action, Store } from '@ngrx/store';
import { TasksActionTypes, TasksActions } from './tasks.actions';
import { Task } from './task';


export const tasksFeatureKey = 'tasks';

export interface State {
 loading?: boolean;
 entities: Task[];
 newTask?: Task;
 entity?: Task;
 error?: any;
}

export const initialState: State = {
  loading: false,
  entities: []
};

export function reducer(state = initialState, action: TasksActions): State {
  switch (action.type) {
    case TasksActionTypes.DeleteTask:
        console.log(state);
        return {
          ...state,
          entities: state.entities.filter((item) => {item.id !== action.payload;})
        };
    case TasksActionTypes.Load:
      console.log('Action received');
      return {
        ...state,
        loading: true,
      };
      break;
    case TasksActionTypes.LoadCompleted:
      console.log(action);
      return {
        ...state,
        loading: false,
        entities: action.payload
      };
    case TasksActionTypes.LoadFialed:
      return {
        ...state,
        loading: false,
        entities: [],
        error: action.payload,
      };
    case TasksActionTypes.LoadTaskSuccess:
      return{
        ...state,
        entity: action.payload
      };
    case TasksActionTypes.AddTask:
      // tslint:disable-next-line: align
      return {
        entities: [...state.entities, action.payload]
      };

      case TasksActionTypes.LoadTask:
        return {
          ...state,
          entity: state.entities.find((item) => item.id === +action.payload)
        };
    default:
      return state;
  }
}

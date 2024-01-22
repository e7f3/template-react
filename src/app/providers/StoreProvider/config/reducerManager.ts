import {
  ActionFromReducer,
  Reducer,
  ReducerFromReducersMapObject,
  ReducersMapObject,
  combineReducers,
} from '@reduxjs/toolkit'

import { ReducerManager } from './StateSchema'

function createReducerManager<S extends {}>(
  initialReducers: ReducersMapObject<S>
): ReducerManager<S> {
  const reducers: ReducersMapObject<S> = {
    ...(initialReducers as object),
  } as ReducersMapObject<S>
  let combinedReducer = combineReducers(reducers)
  let keysToRemove: (keyof S)[] = []

  const reduce = ((
    state: S,
    action: ActionFromReducer<
      ReducerFromReducersMapObject<ReducersMapObject<S>>
    >
  ) => {
    if (keysToRemove.length > 0) {
      state = { ...(state as any) }
      for (const key of keysToRemove) {
        delete state[key]
      }
      keysToRemove = []
    }

    return combinedReducer(state, action)
  }) as Reducer<
    S,
    ActionFromReducer<ReducerFromReducersMapObject<ReducersMapObject<S>>>
  >

  return {
    getReducerMap: () => reducers,
    reduce,
    add: (key: keyof S, reducer: ReducersMapObject<S>[keyof S]) => {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer
      combinedReducer = combineReducers(reducers)
    },
    remove: (key: OptionalKeys<S>) => {
      if (!key || !reducers[key]) {
        return
      }

      delete reducers[key]
      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
    },
  }
}

export default createReducerManager

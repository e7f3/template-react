import {
  ReducersMapObject,
  Reducer,
  ActionFromReducer,
  ReducerFromReducersMapObject,
} from '@reduxjs/toolkit'

export interface StateSchema {
  // Put your state schema here
}

export type StateSchemaKey = keyof StateSchema

export type OptionalStateSchemaKey = OptionalKeys<StateSchema>

export type StateSchemaReducers = {
  [K in StateSchemaKey]?: Reducer<StateSchema[K]>
}

export type ReducersWithoutKey<K extends StateSchemaKey> = {
  [P in Exclude<keyof StateSchema, K>]: Reducer<StateSchema[P]>
}

export interface ReducerManager<S> {
  getReducerMap: () => ReducersMapObject<S>
  reduce: Reducer<
    S,
    ActionFromReducer<ReducerFromReducersMapObject<ReducersMapObject<S>>>
  >
  add: (key: keyof S, reducer: ReducersMapObject<S>[keyof S]) => void
  remove: (key: OptionalKeys<S>) => void
}

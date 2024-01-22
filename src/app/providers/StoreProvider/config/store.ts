import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import createReducerManager from './reducerManager'
import { StateSchema } from './StateSchema'

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {}

  const reducerManager = createReducerManager<StateSchema>(rootReducers)

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState: initialState,
  })

  return store
}

export type Store = ReturnType<typeof createReduxStore>
export type StoreDispatch = Store['dispatch']
export const useAppDispatch = () => useDispatch<StoreDispatch>()

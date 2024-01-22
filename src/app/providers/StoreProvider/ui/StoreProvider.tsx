import { FC, ReactNode, useMemo } from 'react'
import { StateSchema } from '../config/StateSchema'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
  inititalState?: StateSchema
  children: ReactNode
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { inititalState, children } = props

  const store = useMemo(() => createReduxStore(inititalState), [inititalState])
  return <Provider store={store}>{children}</Provider>
}

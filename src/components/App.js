import React from 'react'
import { Provider } from 'react-redux'
import GridList from './GridList'
import ButtonReload from './ButtonReload'
import ButtonShowMore from './ButtonShowMore'

import store from '../store/store'

import '../styles/App.styl'

const App = () => {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <GridList />
        <ButtonReload />
        <ButtonShowMore />
      </div>
    </Provider>
  )
}

export default App

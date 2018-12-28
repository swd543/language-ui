import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './App.css'
import Routes from './components/Routes'
import TopBar from './components/TopBar'
import darkTheme from './styles/darkTheme'

const rootReducer = state => {
  return state
}

let store = createStore(rootReducer)

class App extends Component {
  componentWillMount() {
    fetch('/ping')
      .then(r => r.json())
      .then(r => console.log(r))
      .catch(e => console.log(e))
  }

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={darkTheme}>
          <Routes />
          <TopBar />
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App

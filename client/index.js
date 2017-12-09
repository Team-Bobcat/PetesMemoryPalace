import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
const mainStyle = require('./main.css'); 

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))


if (module.hot) {
  module.hot.accept();
}
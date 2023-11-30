// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import store from './redux/store.ts'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  {/* <React.StrictMode> */}
  <Provider store={store}>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  {/* </React.StrictMode> */}
  </Provider>
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import ListMobil from './components/ListMobil'
import Login from './components/Login'
import Protected from "./components/Protected";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route 
            path='/' 
            element= {<App/>}>
          </Route>
          <Route 
            path='/list-mobil' 
            element= 
            {
            <Protected>
              <ListMobil/>
            </Protected>
            }>
          </Route>
          <Route 
            path='/login' 
            element= {<Login/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

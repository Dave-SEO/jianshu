import React from 'react';
import Header from './common/header';
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/home'
import detail from './pages/detail/loadable'
import Login from './pages/login'
function App() {
  return (
    <Provider store={store}>
       <BrowserRouter>  
          <div>
            <Header />
            <Route path='/login' exact component={Login}></Route>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={detail}></Route>
          </div>
       </BrowserRouter>
    </Provider>
  );
}

export default App;

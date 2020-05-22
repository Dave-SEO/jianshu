import React from 'react';
import Header from './common/header';
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/home'
import detail from './pages/detail'
function App() {
  return (
    <Provider store={store}>
       <Header />
       <BrowserRouter>  
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={detail}></Route>
          </div>
       </BrowserRouter>
    </Provider>
  );
}

export default App;

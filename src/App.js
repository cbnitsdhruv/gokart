import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import ProductDetails from './Pages/ProductDetails';
import NotFound from './Pages/NotFound';
import { store } from './redux/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <>
     <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-list' element={<ProductList />} />
        <Route path='/product-details' element={<ProductDetails />} />

        <Route path='/*' element={<NotFound/>} />
      </Routes>    
      </Router>
      </Provider>
    </>
  );
}

export default App;

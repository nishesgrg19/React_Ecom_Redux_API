
import './App.css';
import { setProduct } from './actions/p_action';
import { useSelector ,useDispatch} from 'react-redux';
import Header from './Header';
import AllProduct from './AllProduct';
import ProductDetails from './ProductDetails';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const cdata=useSelector((state)=>state.product_reducer)
  const dispatch=useDispatch();
  return (
    <div className="App">

 <BrowserRouter>
 <Header/>
      <Routes>
        <Route path="/" element={<AllProduct />} />
        <Route path="/productdetail/:pid" element={<ProductDetails />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

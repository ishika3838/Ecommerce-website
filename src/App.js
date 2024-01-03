import React from 'react';
import './App.css';
import SignIn from './features/auth/components/Signin';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ShoppingCart from './pages/ShoppingCart';
import Checkoutpage from './pages/Checkoutpage';
import ProductdetailPage from './pages/ProductdetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/login",
    element:<SignIn/>,
  },
  {
  path: "/register",
  element:<SignupPage/>,
},
{
  path: "/cart",
  element:<ShoppingCart/>,
},
{
  path: "/checkout",
  element:<Checkoutpage/>,
},
{
  path: "/productdetail",
  element:<ProductdetailPage/>,
},
]);

function App() {
  return (
    <div className="App">
    <RouterProvider router={router}/>
    
    </div>
  );
}

export default App;

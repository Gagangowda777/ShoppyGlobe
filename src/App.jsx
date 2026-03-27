import React, { Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

const Header = React.lazy(() => import("./Components/Header"));
const ProductList = React.lazy(() => import("./Components/ProductList"));
const ProductDetal = React.lazy(() => import("./Components/ProductDetal"));
const Cart = React.lazy(() => import("./Components/Cart"));
const ErrorPage = React.lazy(() => import("./Components/ErrorPage"));
const CheckOut = React.lazy(() => import('./Components/CheckOut'));


const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

function App() {
  return (
    <div>
      <Suspense fallback={<div className="flex justify-center items-center h-screen"><p className="text-xl">Loading...</p></div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetal />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App
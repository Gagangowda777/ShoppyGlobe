import { Routes, Route, Outlet } from 'react-router-dom';
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import ProductDetal from "./Components/ProductDetal";
import Cart from "./Components/Cart";
import ErrorPage from "./Components/ErrorPage";

// Create a layout component that includes the Header
const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetal />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App
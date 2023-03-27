import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      {/* <nav>Navigation</nav> - Most basic approach */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="login" element={<Login setUser={setUser}></Login>} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user}></Dashboard>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      {/*  <footer>Footer</footer> - Most basic approach */}
    </BrowserRouter>
  );
}

export default App;

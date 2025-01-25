import { Routes, Route } from "react-router-dom";
import CategoryAdd from "@components/category/CategoryAdd";
import CategoryUpdate from "@components/category/CategoryUpdate";
import CategoryList from "@components/category/CategoryList";
import ProductAdd from "@components/product/ProductAdd";
import ProductUpdate from "@components/product/ProductUpdate";
import ProductList from "@components/product/ProductList";
import Dashboard from "@components/user/Dashboard";
import Home from "@components/user/Home";
import Profile from "@components/user/Profile";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/categories/Add" element={<CategoryAdd />} />
      <Route path="/categories" element={<CategoryList />} />
      <Route path="/categories/Update" element={<CategoryUpdate />} />
      <Route path="/products/Add" element={<ProductAdd />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/Update" element={<ProductUpdate />} />
      <Route path="/user/Dashboard" element={<Dashboard />} />
      <Route path="/user/Profile" element={<Profile />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

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
      <Route path="" element={<CategoryAdd />} />
      <Route path="" element={<CategoryList />} />
      <Route path="" element={<CategoryUpdate />} />
      <Route path="" element={<ProductAdd />} />
      <Route path="" element={<ProductList />} />
      <Route path="" element={<ProductUpdate />} />
      <Route path="" element={<Dashboard />} />
      <Route path="" element={<Profile />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

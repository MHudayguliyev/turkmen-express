import React from "react";

/// routes
import Brands from "../pages/Brands/Brands.jsx";
import Categories from "../pages/Categories/Categories.jsx";
import { Layout } from './Layout/Layout';

const routes = [
    {
       path: 'brands',
       element: (
          <Layout>
               <Brands />
          </Layout>
       )
    },
    {
      path: 'categories',
      element: (
          <Layout>
               <Categories />
          </Layout>
      )
   }
 ]

export default routes
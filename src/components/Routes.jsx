import React from "react";

/// routes
import Brands from "../pages/Brands/Brands.jsx";
import Categories from "../pages/Categories/Categories.jsx";
import Products from "../pages/Products/Products.jsx";
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
   },
   {
    path: 'products',
    children: [
      {
        path: '/',
        element: (
          <Layout>
            <Products />
          </Layout>
        )
      },
      {
        path: ':brandID',
        element: (
          <Layout>
            <Products />
          </Layout>
        )
      }
    ]
 }
 ]

export default routes
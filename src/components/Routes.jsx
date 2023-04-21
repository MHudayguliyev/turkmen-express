import React from "react";

/// routes
import Brands from "../pages/Brands/Brands.jsx";
import Categories from "../pages/Categories/Categories.jsx";
import Products from "../pages/Products/Products.jsx";
import { Layout } from './Layout/Layout';
import CategoriesSideBar from "./SideBars/CategoriesSideBar/CategoriesSideBar.jsx";
import ProductsTags from "./SideBars/ProductTags/ProductsTags.jsx";
import FilterPrice from "./SideBars/FilterPrice/FilterPrice.jsx";
import FilterBy from "./SideBars/FilterBy/FilterBy.jsx";
import Basket from '../pages/Basket/Basket.jsx'
import BasketSidebar from "./SideBars/BasketSidebar/BasketSidebar.jsx";

const routes = [
    {
       path: 'brands',
       element: (
          <Layout sidebars={[]}>
            <Brands />
          </Layout>
       )
    },
    {
      path: 'categories',
      element: (
          <Layout sidebars={[
            {component: <CategoriesSideBar />}, 
            {component: <ProductsTags />}, 
            {component: <FilterPrice />},
            {component: <FilterBy filterBy='color'/>},
            {component: <FilterBy filterBy='brand'/>},
            {component: <FilterBy filterBy='size'/>}
          ]}
          >
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
          <Layout sidebars={[
            {component: <CategoriesSideBar />}, 
            {component: <ProductsTags />}, 
            {component: <FilterPrice />},
            {component: <FilterBy filterBy='color'/>},
            {component: <FilterBy filterBy='brand'/>},
            {component: <FilterBy filterBy='size'/>}
          ]}>
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
      },
    ]
 
 },
 {
  path: 'basket',
  element: (
     <Layout sidebars={[{component: <BasketSidebar />}]}>
       <Basket />
     </Layout>
  )
}
 ]

export default routes
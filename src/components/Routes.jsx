import React from "react";

/// routes
import Brands from "../pages/Brands/Brands.jsx";
import Categories from "../pages/Categories/Categories.jsx";

const routes = [
    {
       path: 'brands',
       element: (
            <Brands />
       )
    },
    {
      path: 'categories',
      element: (
           <Categories />
      )
   }
 ]

export default routes
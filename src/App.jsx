import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./assets/components/Products/Products";
import ProductsDetails from "./assets/components/ProductsDetails/ProductsDetails";
import Layout from "./assets/components/Layout/Layout";

function App(){
  const router = createBrowserRouter([
    {path: '/', element: <Layout/> , children: [
      {path: '' , element: <Products/>},
      {path: 'productsDetails/:id', element: <ProductsDetails/>}
    ]},

,  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )

}
export default App;


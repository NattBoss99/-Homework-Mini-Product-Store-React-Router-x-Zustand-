import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import { getProductById, getProducts } from "../api/products";
import Cart from "../pages/Cart";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <ProductList />,
                loader: getProducts
            },
            {
                path: 'product/:id',
                element: <ProductDetail />,
                loader: getProductById
            },
            {
                path: 'cart',
                element: <Cart />
            }
        ]
    }
])

export default router;
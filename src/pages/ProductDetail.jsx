

import React from 'react'
import { useLoaderData } from 'react-router-dom';
import useCartStore from '../store/cartStore';

const ProductDetail = () => {

    const product = useLoaderData();

    const addToCart = useCartStore((state)=>state.addToCart);

    const handleAdd = () =>{
        addToCart(product)
        alert('Added to cart!')
    };

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>{product.description}</p>
            <button onClick={handleAdd}>Add to Cart</button>
        </div>
    );
};
export default ProductDetail;
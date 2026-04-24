
export const getProducts = async() => {
  
    const res = await fetch('https://dummyjson.com/products')
  
    const data = await res.json();

    return data.products;
}

export const getProductById = async({ params }) => {
  
    const res = await fetch(`https://dummyjson.com/products/${params.id}`)
  
    const data = await res.json();

    return data;
}


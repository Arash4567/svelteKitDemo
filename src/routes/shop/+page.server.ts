/* SERVER SIDE CALL API */
export const load = async () => {
  console.log("Fetching from server");
  
  async function fetchProducts() {
    const productRes = await fetch('https://dummyjson.com/products?limit=3');
    const productData = await productRes.json();
    const products = productData.products;
    return products;
  }

  return {
    products: fetchProducts()
  };
};

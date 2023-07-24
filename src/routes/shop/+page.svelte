<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  const { products } = data;
  /* {
    id: 10,
    title: 'HP Pavilion 15-DK1056WM',
    description: 'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
    price: 1099,
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: 'HP Pavilion',
    category: 'laptops',
    thumbnail: 'https://i.dummyjson.com/data/products/10/thumbnail.jpeg',
    images: [
      'https://i.dummyjson.com/data/products/10/1.jpg',
      'https://i.dummyjson.com/data/products/10/2.jpg',
      'https://i.dummyjson.com/data/products/10/3.jpg',
      'https://i.dummyjson.com/data/products/10/thumbnail.jpeg'
    ]
  } */
</script>

<h1>Market Place</h1>
<div class="grid">
  {#each products as product}
    <div>
      <img src={product.images[0]} alt="img" />
      <h3>{product?.title}</h3>
      <small>${product?.price}</small>
      <p>{product?.description}</p>
    </div>
  {/each}
</div>

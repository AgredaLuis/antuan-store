export async function fetchProductBySlug(slug) {
    const response = await fetch(`https://store.api.antuan01.com/api/products/${slug}`);
    const product = await response.json();
    return product;
  }
  
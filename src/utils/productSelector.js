// selectors for products
export const selectAllProducts = (state) =>
  state.products.products;

export const selectSearchTerm = (state) =>
  state.products.searchTerm;

export const selectFilteredProducts = (state) => {
  const products = state.products.products;
  const searchTerm = state.products.searchTerm.toLowerCase();

  return products.filter((product) => product.title.toLowerCase().includes(searchTerm));
};
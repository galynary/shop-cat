function removeFromArray(arr, product) {
  const index = arr.findIndex(item => item.id === product.id);
  if (index !== -1) {
    arr.splice(index, 1);
  }
}
export { removeFromArray };

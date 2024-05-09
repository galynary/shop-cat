//завдання    додати  ті count де  одинакові id

const products = [
  {
    id: 'cat1',
    count: '2',
  },
  {
    id: 'cat2',
    count: '5',
  },
  {
    id: 'cat3',
    count: '3',
  },
  {
    id: 'cat3',
    count: '6',
  },
  {
    id: 'cat3',
    count: '1',
  },
  {
    id: 'cat4',
    count: '8',
  },
  {
    id: 'cat4',
    count: '3',
  },
  {
    id: 'cat5',
    count: '9',
  },
  {
    id: 'cat6',
    count: '12',
  },
];
function sortProducts(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    console.log('поточний', arr[i]);
    for (let j = i + 1; j < arr.length; j += 1) {
      console.log('наступний', arr[j]);
      if (arr[i].id === arr[j].id) {
        arr[i].count += arr[j].count;
        arr.splice(j, 1);
        j -= 1;
      }
    }
  }
}

sortProducts(products);
console.log(products);

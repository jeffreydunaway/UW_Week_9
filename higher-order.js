const repeatFn = (times, callback) => {
  for (let i = 0; i < times; i++) {
    callback(i);
  }
};

// Test repeatFn
const addButton = num => {
  const button = document.createElement('button');
  button.innerText = `Button ${num}`;
  document.querySelector('body').appendChild(button);
};
repeatFn(6, addButton);
const toThePower = (num, pow) => {
  let product = 1;
  repeatFn(pow, () => {
    product += product * num;
  });
  return product;
};
console.log(toThePower(3, 3));

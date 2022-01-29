'use scrict';

const button = {
    width: 200,
    height: 100,
    color: 'green'
};

const buttonRed = {
    ...button,
    color: 'red',
    width: 300,
    opacity: 50,
    borderradius: 10
};

console.table(buttonRed);
console.table(button);


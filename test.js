const numberOfFilms = 10;
const posts = 100;

const db = {
    numberOfFilms,
    posts,
    username: "Valery"
};

console.log(db);

db['gay'] = false;

db.notGay = true;

console.log('Объект после добавления свойств: ', db);

const c = JSON.stringify(db);

console.log(c);

console.log(JSON.parse(c));

function myFn (a, b) {
    let c;
    a = a + 1;
    c = a + b;
    return c;
}
console.log(myFn(10, 5));
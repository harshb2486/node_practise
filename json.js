const book = {
    title: "The Great Gatsby",
};
const dog = JSON.stringify(book);

console.log(dog);

const parse = JSON.parse(dog);
console.log(parse.title);
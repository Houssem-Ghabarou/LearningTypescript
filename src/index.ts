//tuples is sort of array which is fixed in length and type

let article: readonly [number, string, boolean] = [1, "hello", true];

article = [2, "world", false];

// article.push(3); // Error

console.log(article);

const [id, title, published] = article;

console.log(id, title, published);

// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
  cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
}
function appendCat(name) {
  console.log([...cats, name]);
  return [...cats, name];
}

appendCat("Mekkie");

function prependCat(name) {
  console.log([name, ...cats]);
  return [name, ...cats];
}
function removeLastCat() {
  const newCats = cats.slice();
  console.log(newCats);
  newCats.pop();
  return newCats;
}
function removeFirstCat() {
  const newCats = cats.slice();
  newCats.shift();
  return newCats;
}

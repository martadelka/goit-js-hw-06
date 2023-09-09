const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const array = [];
ingredients.forEach(element => {
  const liElem = document.createElement("li");
  liElem.textContent = element;
  liElem.classList.add("item");
  array.push(liElem)
});

console.log(array);
ingredientsList.append(...array);
console.log(ingredientsList);
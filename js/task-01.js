const liItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItems.length}`);

liItems.forEach((element) => {
    const categoryName = element.firstElementChild;
    console.log(`Category: ${categoryName.textContent}`);
    const ulSibling = categoryName.nextElementSibling;
    const liChildren = ulSibling.children;
    console.log(`Elements: ${liChildren.length}`);
});


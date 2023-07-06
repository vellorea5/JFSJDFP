const productsController = new ProductsController(0);
console.log(productsController.items);

const prodForm = document.querySelector("#addProduct");

prodForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const productName = document.querySelector("#productName");
    const productDesc = document.querySelector("#productDesc");
    const productImg = document.querySelector("#productImg");

    
});
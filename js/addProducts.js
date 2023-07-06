

const productList = new ProductList();
const prodForm = document.querySelector("#addProduct");

prodForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const productName = document.querySelector("#productName").value;
    const productDesc = document.querySelector("#productDesc").value;
    const productImg = document.querySelector("#productImg").value;
    const product = new Product(productName, productDesc, productImg);

    productList.addProduct(product);
    localStorage.setItem("storageProductList", JSON.stringify(productList));
    console.log(productList.list);
});
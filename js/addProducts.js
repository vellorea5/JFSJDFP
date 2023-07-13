
import { Product, productList } from "./ProductModule.js";

const prodForm = document.querySelector("#addProduct");

prodForm.addEventListener('submit', (event) => {

    event.preventDefault();

    let productName = document.querySelector("#productName").value;
    let productDesc = document.querySelector("#productDesc").value;
    let productImg = document.querySelector("#productImg").value;
    let product = new Product(productName, productDesc, productImg);

    productList.addProduct(product);
    console.log(`st:${JSON.stringify(productList)}`);
    localStorage.setItem("storageProductList", JSON.stringify(productList));
    console.log(`ProductList: ${productList.mylist}`);
});
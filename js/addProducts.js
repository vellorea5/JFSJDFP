
const prodForm = document.querySelector("#addProduct");

prodForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const productName = document.querySelector("#productName").value;
    const productDesc = document.querySelector("#productDesc").value;
    const productImg = document.querySelector("#productImg").value;
    const product = new Product(productName, productDesc, productImg);

    productList.addProduct(product);
    localStorage.setItem("storageProductList", JSON.stringify(productList.list));
    const productCount = productList.list.length;
    console.log('Product Count:'+productCount);
    console.log('Product List:'+productList.list);
    
});
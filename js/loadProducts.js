import { Product, productList } from "./ProductModule.js";

let storageProductList = localStorage.getItem("storageProductList");
let productContainer = document.querySelector("#productContainer");

if(storageProductList) {
    
    //productList = storageProductList;
    storageProductList = JSON.parse(storageProductList);

    //console.log("Prod:"+productList);
    renderProducts(storageProductList);
}

function renderProducts(productList) {

    let productCount = productList.mylist.length;
    let rowCount = Math.floor(productCount / 4) + 1;
    console.log('Row count:'+rowCount);
    
    let code = `<div class="row">`;
    let currentCount = 0;

        productList.mylist.forEach((product) => {
            currentCount++;
            console.log(product.img);
            console.log(product.name);
            console.log(product.desc);

            code += 
            `<div class="col">\n
                <div class="card">\n
                    <img src=${product.img} class="card-img-top"> \n
                    <div class="card-body"> \n
                        <h5 class="card-title">${product.name} </h5>\n
                        <p class="card-text">${product.desc} </p>\n
                        <a href="#" class="btn btn-primary">Add to Cart</a>\n
                    </div>\n
                </div>\n
            </div>\n`;
        
        });

        code += `</div>`;
        productContainer.innerHTML = code;
}

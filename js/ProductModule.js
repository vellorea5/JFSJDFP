
class Product {
    static currentId=0;
    constructor(name, desc, img) {
        this.name = name;
        this.desc = desc;
        this.img = img;
        this.id = Product.currentId++;
    }
}

class ProductList {
    constructor() {
        //let storageProductList = localStorage.getItem("storageProductList");
        //let obj = JSON.parse(storageProductList);
        //console.log(obj);
        
        /*if(obj!=null)
            this.list = obj;
        else*/
            this.list = [];
    }

    addProduct(product) {
        this.list.push(product);
    }
}

let productList = new ProductList();
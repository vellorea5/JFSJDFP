
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
        let productList = localStorage.getItem("storageProductList");
        if(productList)
            this.mylist = productList.mylist;
        else
            this.mylist = [];
    }

    addProduct(product) {
        this.mylist.push(product);
        ProductList.productCount++;
    }
}

let productList = new ProductList();

export { Product, productList };
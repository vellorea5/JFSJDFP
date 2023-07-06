
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
        this.list = [];
    }

    addProduct(product) {
        this.list.push(product);
        ProductList.productCount++;
    }
}
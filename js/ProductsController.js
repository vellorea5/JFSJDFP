// Products Controller Class

class ProductsController {
    constructor(newcurrentId=0) {
        this.items = [];
        this.currentId = newcurrentId;
    }

    addItem(pname, pdesc, pimg, pcreatedAt) {
        const item1 = {
            id: this.currentId++,
            name: pname,
            description: pdesc,
            img: pimg,
            createdAt: pcreatedAt
        };

        this.items.push(item1);
    }
}


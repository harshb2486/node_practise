class Product {
    total;
    price;
    constructor(total, price) {
        this.total = total;
        this.price = price;
    }

    get stock() {
        if (this.total > 0) {
            return `In stock: ${this.total}`;
        }        return 'Out of stock';
    }


    sell() {
        this.total-=1;
    }
}

const pen = new Product(10, 100);
pen.sell();
var stock = pen.stock;
console.log(stock);
pen.sell();
console.log(pen.total);
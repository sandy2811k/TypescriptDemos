// create product class accept code,name,price in constructor
// give 10% discount on price then Display
var Product = /** @class */ (function () {
    function Product(code, name, price) {
        this.code = code;
        this.name = name;
        this.price = price;
    }
    Product.prototype.GiveDiscount = function () {
        this.Discount = (this.price - (this.price * 0.10));
    };
    Product.prototype.print = function () {
        console.log(this.code);
        console.log(this.name);
        console.log(this.price);
        console.log(this.Discount);
    };
    return Product;
}());
var prod = new Product(101, "Laptop", 55000);
prod.GiveDiscount();
prod.print();

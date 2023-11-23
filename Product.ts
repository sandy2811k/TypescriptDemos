// Create product class accept code,name,price in constructor
// give 10% discount on price then Display it.

class Product
{
    code:number;
    name:string;
    price:any;
    Discount:any;

    constructor(code,name,price)
    {
       this.code=code;
       this.name=name;
       this.price=price;
    }

    GiveDiscount()
    {
        this.Discount=(this.price-(this.price*0.10));

    }
    print()
    {
        console.log(this.code);
        console.log(this.name);
        console.log(this.price);
        console.log(this.Discount);
    }

}

const prod=new Product(101,"Laptop",55000);
prod.GiveDiscount();
prod.print();

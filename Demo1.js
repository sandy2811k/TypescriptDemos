// 1st Code
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.print = function (value) {
        console.log(value.a + " " + value.b);
    };
    return Test;
}());
var IData = { a: 10, b: 20 };
var t1 = new Test();
t1.print(IData);
// class typescript
// {
//     addition(value:IData)
//     {
//         console.log(value.a+" "+value.b);
//     }
// }
// const IData={a:10,b:20};

;
// union code
var p1;
p1 = {
    first: "rahul",
    id: 23
};
// by using the intersection 
var p2;
p2 = {
    first: "abhi ",
    id: 45,
    last: "khan",
    roll_no: 567
};
console.log(p2);
console.log(p1);
var p;
p = {
    first: "amna",
    last: "diixt",
    roll_no: 23
};
console.log(p.first);
// classes in ts 
var car = /** @class */ (function () {
    function car(brand) {
        this.brand = brand;
    }
    car.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return car;
}());
var c1 = new car("bmw");
c1.getBrand();

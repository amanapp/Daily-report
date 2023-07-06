// normal class creation 
class Car{
    brand;
    constructor(brand){
        this.brand=brand;
    }
    getBrand(){
        console.log(this.brand)
    }
}
// constructer calling
let info =new Car('Audi');
// access car property
info.getBrand();


// interface creation 
interface CarX{
    brand:string;
    model:string;
}
// interface creation
interface CarY{
    release:string;
}
// use interface in class 
class carZ implements CarY ,CarX{
    constructor(public brand,public model,public release){
    
    }

    getBrand1(){
        console.log("hi hello ");
    }
}



// NOTE :- 
// public - access any where 
// private - access by using getter & setter function/method 
// protected - only access in subclasses  
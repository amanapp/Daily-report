// interface creation 
interface Student{
    first:string;
    last:string;
    roll_no:number;
};


// interface creation 
interface Person{
    first:string;
    id:number;

}
// union code
let p1:Person | Student;
p1={
    first:"rahul",
    id:23
}

// by using the intersection 
let p2 :Person & Student;
p2={
    first:"abhi ",
    id:45,
    last:"khan",
    roll_no:567
}
console.log(p2);


console.log(p1);

let p:Student;
p={
    first:"amna",
    last:"diixt",
    roll_no:23
};

console.log(p.first);

// classes in ts 


class car{
    brand;

    constructor(brand){
      this.brand=brand;

    }
    getBrand(){
        console.log(this.brand);
    }


}
let c1 =new car("bmw");
c1.getBrand();



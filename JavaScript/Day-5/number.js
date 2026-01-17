/* Method - 1 */
let a = 10;
console.log(a);

let b = 345.6821;
console.log(b);

// toFixed
let c = b.toFixed(1);
console.log(c);

// toPrecision
let d = b.toPrecision(4);
console.log(d);

// toString
let e = b.toString();
console.log(e);


/* Method - 2 */
let f = new Number(20);
let g = new Number(20);
console.log(f);
console.log(f==g); // false

console.log(Boolean(new Number(10))); // true

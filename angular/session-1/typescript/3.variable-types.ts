// Number
let decimal: number = 200;
console.log("decimal: "+ decimal);

// String
let decstring: string = "10";
console.log("decstring: "+ decstring);

// Boolean
const istrue: boolean = false;
console.log("istrue: "+ istrue);

// Null
let nulltitle: null = null;
console.log(nulltitle);

// Undefined
let undeftitle: undefined = undefined;
console.log(undeftitle);

// Array
let avengers: string[] = ["hulk", "iron man", "spiderman", "captain america"];
console.log(avengers);

let stars: number[] = [871, 112, 31141122, 2984112, 512111, 60000];
console.log(avengers);

let cities: Array<string> = ["Nagpur", "Mumbai", "Delhi"];
console.log(cities);

let pincodes: Array<number> = [440001, 440025, 100011, 100006, 400104];
console.log(pincodes);

let person: Array<Object> = [ { "name": "Aaditya", "city": "Nagpur" } ];
console.log(person);

// Any
let bollywood: any = {
  "actors": [ "SRK", "SLMN", "Saif", "Amitji" ],
  "directors": [
    {
      "name": "Anurag Kashyap",
      "movies": [
        {},
        {},
        {}
      ]
    },
  ]
};

console.log(bollywood);

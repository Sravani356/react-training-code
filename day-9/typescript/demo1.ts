let a = 1; //datatype for a is number
a = 'test'; //cannot assign a string type now to a

let b: string;
b=2;
function add(a: number, b:number): number {
    return a+b;
}

const result = add(2, '34');
console.log(result);
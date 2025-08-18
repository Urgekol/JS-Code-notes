let p, q, r, s, t;

p = Number("3.14");     // String -> Number

q = Number("pizza")     //will give "NaN"   - Not a number

r = String(3.14);       //Number -> String

s = Boolean("");        //if nothing, gives false

t = Boolean("pizza");   //will give true


console.log(p, typeof(p));

console.log(q, typeof(q));

console.log(r, typeof(r));

console.log(s, typeof(s));

console.log(s, typeof(t));
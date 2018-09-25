/*

- First, refactor the code below to use variables. Then,
- Refactor  to use Template Strings (backticks) instead on concatenation

 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

 */

let applesCost =10;
let mangoesCost= 20;
let bananasCost= 15;
let peachesCost=20;
console.log(`One apple costs Rs. ${applesCost}`);
console.log(`Two apples cost Rs. ${applesCost * 2}`);
console.log(`A dozen apples cost Rs. ${applesCost * 12}`);
console.log(`Six apples cost Rs. ${applesCost * 6}`);
console.log(`Ten apples cost Rs.${applesCost * 10}`);

console.log(`One mango costs Rs. ${mangoesCost}`);
console.log(`Two mangoes cost Rs. ${mangoesCost * 2}`);
console.log(`A dozen mangoes cost Rs.${mangoesCost * 12}`);
console.log(`Six mangoes cost Rs.${mangoesCost * 6}`);
console.log(`Ten mangoes cost Rs.${mangoesCost * 10}`);

console.log(`One banana costs Rs. ${bananasCost}`);
console.log(`Two bananas cost Rs. ${bananasCost * 2}`);
console.log(`A dozen bananas cost Rs. ${bananasCost * 12}`);
console.log(`Six bananas cost Rs. ${bananasCost * 6}`);
console.log(`Ten bananas cost Rs. ${bananasCost * 10}`);

console.log(`One peach costs Rs. ${peachesCost}`);
console.log(`Two peaches cost Rs. ${peachesCost* 2}`);
console.log(`A dozen peaches cost Rs. ${peachesCost * 12}`);
console.log(`Six peaches cost Rs. ${peachesCost * 6}`);
console.log(`Ten peaches cost Rs. ${peachesCost * 10}`);


console.log(`one banana, one peach, one apple and one mango together cost Rs. ${bananasCost + peachesCost + applesCost+ mangoesCost}`);

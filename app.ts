// app.ts - Imports functions from math.ts
import { add, subtract, PI } from "./math";  // Importing specific functions

const num1 = 10;
const num2 = 5;

console.log(`📌 ${num1} + ${num2} =`, add(num1, num2));
console.log(`📌 ${num1} - ${num2} =`, subtract(num1, num2));
console.log(`📌 Value of PI:`, PI);

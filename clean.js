 'use strict';

const { default: object } = require("lodash-es/object");

 
 const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'daphne' },
 {value: -45, description: 'Groceries 🥑', user: 'daphne' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'daphne' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'daphne' },
  { value: -1100, description: 'New iPhone 📱', user: 'daphne' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'daphne' },
];

const spendingLimits = object.freeze( {
  daphne: 1500,
  matilda: 100,
});
const getLimit = user =>spendingLimits?.[user] ?? 0;

const addExpense = function (value, description, user) {
  if (!user) user = 'daphne';
  user = user.toLowerCase();

  
  
  //const limit = getLimit();

  if (value <= getLimit(entry.user) ) {
    budget.push({ value: -value, description ,user});
  }
};
   addExpense(10, 'Pizza 🍕');
   addExpense(100, 'Going to movies 🍿', 'Matilda');
   addExpense(200, 'Stuff', 'Jay');


const checkExpenses = function () {
  for (const entry of budget) 
  
    
    

    if (entry.value < getLimit(entry.user)) {
      entry.flag = 'limit';
    }
  
};
checkExpenses();



const logBigExpenses = function (bigLimit) {
  let output = '';

  output = entry.value <= -bigLimit  ?  `${entry.description.slice(-2)} + ' / '`:''



 // for (const entry of budget) {
   // if (entry.value <= -limit) {
    //  output += `${entry.description.slice(-2)} + ' / '`; 
   // }
 // }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(1000);
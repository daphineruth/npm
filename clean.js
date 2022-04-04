 'use strict';

//const { default: object } = require("lodash-es/object");

 
 const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'daphne' },
 {value: -45, description: 'Groceries 🥑', user: 'daphne' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'daphne' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'daphne' },
  { value: -1100, description: 'New iPhone 📱', user: 'daphne' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'daphne' },
]);

const spendingLimits = Object.freeze( {
  daphne: 1500,
  matilda: 100,
});

const getLimit = user =>spendingLimits?.[user] ?? 0;
//pure function
const addExpense = function (
  state,
  limits,
  value, 
  description, 
  user
  )
   {
  if (!user) user = 'daphne';
  user = user.toLowerCase();

  
  
  //const limit = getLimit();

  //if (value <= getLimit(entry.user) ) {

    return value = getLimit(cleanUser)
     ? [...state, { value: -value, description ,user:cleanUser
    }]
    :state;
  //}
  
   // budget.push({ value: -value, description ,user});
  };

   const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');

   console.log(newBudget1);

   const newBudget2 = addExpense(
      newBudget1, 
      spendingLimits, 
      100, 
      'Going to movies 🍿',
       'Matilda'
       );
        
   const newBudget3 = addExpense(budget, spendingLimits, 200, 'Stuff', 'Jay');


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
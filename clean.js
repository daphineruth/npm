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

const spendingLimits = {
  daphne: 1500,
  matilda: 100,
};

const addExpense = function (value, description, user) {
  if (!user) user = 'jonas';
  user = user.toLowerCase();

  
  
  const limit = spendingLimits?.[user] ?? 0;

  if (value <= lim) {
    budget.push({ value: -value, description ,user});
  }
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');
console.log(budget);

const checkExpenses = function () {
  for (var entry of budget) 
  {
    
    const limit = spendingLimits?.[entry.user] ?? 0;

    
    if (entry.value < -limit) {
      entry.flag = 'limit';
    }
  }
};
checkExpenses();

console.log(budget);

var bigExpenses = function (limit) {
  var output = '';
  for (var el of budget) {
    if (el.value <= -limit) {
      output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
    }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

bigExpenses(1000);
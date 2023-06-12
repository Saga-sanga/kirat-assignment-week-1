/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  return transactions.reduce((accumulator, transaction) => {
    // check if category already exists in array if not initialise object
    if (!accumulator.some(element => element.category === transaction.category)) {
      accumulator.push({
        category: transaction.category,
        totalSpent: 0
      })
    }

    for (const element of accumulator) {
      if (element.category === transaction.category) {
        element.totalSpent += transaction.price;
      }
    }
    return accumulator;
  },[]);
}

module.exports = calculateTotalSpentByCategory;

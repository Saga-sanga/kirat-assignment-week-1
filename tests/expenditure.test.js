const calculateTotalSpentByCategory = require("../01-js/easy/expenditure-analysis");

test("Check the object", () => {
  expect(
    calculateTotalSpentByCategory([
      {
        itemName: "apple",
        category: "fruits",
        price: 25,
        timestamp: Date.now(),
      },
      {
        itemName: "banana",
        category: "fruits",
        price: 30,
        timestamp: Date.now(),
      },
      {
        itemName: "milk",
        category: "drinks",
        price: 80,
        timestamp: Date.now(),
      },
      {
        itemName: "rice",
        category: "grains",
        price: 50,
        timestamp: Date.now(),
      },
      {
        itemName: "wheat",
        category: "grains",
        price: 40,
        timestamp: Date.now(),
      },
    ])
  ).toEqual([{ fruits: 55 }, { drinks: 80 }, { grains: 90 }]);
});

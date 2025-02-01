// Task 1: Product Price Management
let prices = [19.99, 29.99, 39.99, 49.99, 59.99]; // Initialize with five prices

prices.push(69.99); // Add a new price to the array
prices.shift();     // Remove the first price from the array

console.log("Updated Prices:", prices); // Log the updated price list

// Task 2: Modifying Customer Orders
let orders = [2, 4, 6, 8, 10]; // Initialize with five order quantities

orders[2] += 5; // Increase the third order (index 2) by 5


let totalOrders = orders.reduce((sum, qty) => sum + qty, 0); // Calculate the total orders

console.log("Updated Orders:", orders);       // Log the updated orders array
console.log("Total Order Count:", totalOrders); // Log the total number of orders



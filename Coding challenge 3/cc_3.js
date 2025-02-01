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

// Task 3: Employee Performance Tracking
let employee = {
    name: "John Wick",
    role: "Dog trainer",
    performanceScore: 80,
    isActive: true
};
employee.performanceScore = 85; // Update the performance score
employee.promotionEligible = true; // Add a new property for promotion eligibility
console.log("Updated Employee Record:", employee);

// Task 4: Customer Feedback Records
let feedback = [
    { customerName: "Tony stark", feedbackText: "Great service but i can speed it up!", rating: 6 },
    { customerName: "Bruce Banner", feedbackText: "Loved the product quality it didnt make me angry.", rating: 10 },
    { customerName: "Jeff the Land Shark", feedbackText: "Could improve shipping speed RAWR.", rating: 3 }
];


feedback.push({ customerName: "Nick Furry", feedbackText: "Excellent support team!", rating: 10 }); // Add a new feedback record

console.log("Customer Feedback Records:", feedback);


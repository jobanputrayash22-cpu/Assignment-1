function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1: User found");
            resolve({ id: 101, name: "Yash" });
        }, 1000);
    });
}

function getOrders(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2: Orders found for " + user.name);
            resolve({ orderId: 5001, userId: user.id });
        }, 1000);
    });
}

function getOrderDetails(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 3: Order details found");
            resolve({
                orderId: order.orderId,
                product: "Laptop",
                price: 50000
            });
        }, 1000);
    });
}

// Chained Promises
getUser()
    .then((user) => {
        return getOrders(user);
    })
    .then((order) => {
        return getOrderDetails(order);
    })
    .then((details) => {
        console.log("Final Result:");
        console.log(details);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
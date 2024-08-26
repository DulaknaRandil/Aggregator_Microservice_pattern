// orderService.js
const express = require('express');
const app = express();
const PORT = 3002;

app.get('/orders/:userId', (req, res) => {
  const userId = req.params.userId;
  const orders = {
    1: [
      { orderId: 101, product: 'Laptop', amount: 1500 },
      { orderId: 102, product: 'Mouse', amount: 20 },
    ],
    2: [
      { orderId: 201, product: 'Phone', amount: 700 },
      { orderId: 202, product: 'Headphones', amount: 100 },
    ],
  };
  
  res.json(orders[userId] || []);
});

app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});

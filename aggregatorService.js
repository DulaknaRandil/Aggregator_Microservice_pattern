// aggregatorService.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

const USER_SERVICE_URL = 'http://localhost:3001/user';
const ORDER_SERVICE_URL = 'http://localhost:3002/orders';

app.get('/user-details/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    // Fetch user data
    const userResponse = await axios.get(`${USER_SERVICE_URL}/${userId}`);
    const user = userResponse.data;

    // Fetch user orders
    const ordersResponse = await axios.get(`${ORDER_SERVICE_URL}/${userId}`);
    const orders = ordersResponse.data;

    // Aggregate data
    const userDetails = {
      ...user,
      orders: orders,
    };

    res.json(userDetails);
  } catch (error) {
    res.status(500).send('Error retrieving data');
  }
});

app.listen(PORT, () => {
  console.log(`Aggregator Service running on port ${PORT}`);
});

// userService.js
const express = require('express');
const app = express();
const PORT = 3001;

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  const users = {
    1: { id: 1, name: 'John Doe' },
    2: { id: 2, name: 'Jane Smith' },
  };
  
  res.json(users[userId] || {});
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});

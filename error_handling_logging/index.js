const express = require('express');
const fs = require('fs');
const app = express();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.use((req, res, next) => {
  const logEntry = `${new Date().toISOString()} - ${req.method} ${req.url}`;
  fs.appendFile('access.log', logEntry + '\n', err => {
    if (err) console.error('Error writing to log file:', err);
  });
  next();
});

app.get('/error', (req, res, next) => {
  next(new Error('This is a simulated error'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

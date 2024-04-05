const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

const validatePayload = [
  body('email').isEmail(),
  body('password').isLength({ min: 5 })
];

app.post('/validate', validatePayload, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.send('Payload is valid');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

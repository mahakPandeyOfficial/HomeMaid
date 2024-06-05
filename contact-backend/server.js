// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Here, you would typically save the data to a database
  console.log('Contact form submission:', { name, email, message });

  res.status(200).json({ message: 'Form submitted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

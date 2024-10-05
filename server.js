require('dotenv').config(); // Load environment variables from a .env file
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all requests

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/loginDB'; // Use environment variable for MongoDB URI
const client = new MongoClient(uri);
let usersCollection;

// Connect to MongoDB
(async () => {
  try {
    await client.connect();
    const db = client.db('loginDB'); // Replace with your database name
    usersCollection = db.collection('users'); // Replace with your collection name
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
})();

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Query the database for the user
    const user = await usersCollection.findOne({ email });

    if (user) {
      // Compare hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });
        return res.json({ token });
      }
    }

    return res.status(401).json({ message: 'Invalid credentials' });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});

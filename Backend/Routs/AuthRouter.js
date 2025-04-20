const express = require('express');
const User = require('../Models/User');
const { model } = require('mongoose');
const app = express();

app.use(express());


//test api
app.get('/geto' , (req , res)=>{
    res.send('hello')   
});



//post api
// post api
app.post('/login', async (req, res) => {
    const { name, email, password, role } = req.body;
  
    if (!name || !email || !password || !role) {
      return res.status(400).json('Please fill all fields');
    }
  
    console.log('Received Data:', { name, email, password, role });
  
    try {
      const user = new User({ name, email, password, role });
      const savedUser = await user.save();
      res.status(201).json({ message: 'Welcome to Inco', user: savedUser });
    } catch (err) {
      console.error("Error while saving user:", err);  // Log the error
      res.status(500).json({ message: 'Problem in saving user', error: err.message });
    }
  });
  
  

//get api 


// Login route (authenticate)
app.post('/authenticate', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});





module.exports = app;
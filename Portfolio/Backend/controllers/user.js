// require('dotenv').config();
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
JWT_SECRET = 'mySecretKeyForJWTs@2024'
const getmessage = async (req, res) => {
    const { name,email,message } = req.body;
    
    try {
        // const existingUser = await User.findOne({ email });
        // if (existingUser) return res.status(400).json({ message: 'User already exists.' });
        
        // if (password !== confirmPassword) return res.status(400).json({ message: 'Passwords don\'t match' });
        
        // const hashedPassword = await bcrypt.hash(password, 12);
        
        const user = await User.create({ name: name, email:email, message:message });
        
        const authToken = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        
        res.status(200).json({ message: 'User created successfully', token: authToken });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(400).json({ message: error.message });
    }
};



module.exports = {
    getmessage,
};

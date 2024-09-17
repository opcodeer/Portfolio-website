require('dotenv').config(); // Load environment variables
console.log('MONGODB_URI:', process.env.MONGODB_URI); // Debugging - check if MongoDB URI is correctly loaded

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/users.js');

const app = express();
const port = 5000; // Use environment variable for port, default to 8000 if not specified
console.log('Port:', port);

// Connect to MongoDB
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Successfully connected to database");
    } catch (error) {
        console.log("Error occurred: " + error);
        process.exit(1); // Exit with failure
    }
}

// Middleware
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Allow all websites and set credentials to true
app.use(cors({
    origin: ["https://porfolio-backend-xi.vercel.app"],
    methods:["POST"],
    credentials: true,
}));

// Routes
app.use("/user", userRouter);

// Start server
async function startServer() {
    try {
        await connectToDatabase();
        app.listen(port, () => {
            console.log(`The application successfully started on port ${port}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1); // Exit with failure
    }
}

startServer();

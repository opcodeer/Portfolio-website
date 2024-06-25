const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/users.js');


const app = express();
const port = 8000;

// Connect to MongoDB
async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/portfolioreviews');
        console.log("Successfully connected to database");
    } catch (error) {
        console.log("Error occurred: " + error);
    }
}
connectToDatabase();

app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

const corsOptions = {
    origin: 'http://localhost:5173', // Allow requests from this origin
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use("/user", userRouter);

app.listen(port, () => {
    console.log(`The application successfully started on port ${port}`);
});

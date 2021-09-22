const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const ATLAS_URI = process.env.ATLAS_URI;

// This is to allow our api to receive data from a client app
app.use(express.urlencoded({extended: true}));

// This is to allow our api for parsing json
app.use(express.json());

// This is to allow our api for cross-origin resource sharing
app.use(cors());

// Connect to MongoDB Atlas database
mongoose.connect(ATLAS_URI, {
    useNewUrlParser: true
}).then(() => console.log('*** MongoDB connection established! ***'))
.catch(err => console.log(err));

// Check what PORT the app is listening to
app.listen(PORT, () => {
    console.log(`*** Server is listening on port ${PORT} ***`);
});

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 5000;

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true}, err => {
    if (err) throw err;
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

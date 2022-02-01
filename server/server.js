const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
const ATLAS_URI = process.env.ATLAS_URI;
const ErrorHandler = require('./Error/ErrorHandler');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');

//Enable cookie session
app.use(cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100}));

app.use(passport.initialize());
app.use(passport.session());


// Enable cookie dependency
app.use(cookieParser());

// This is to allow our api to receive data from a client app.
app.use(express.urlencoded({extended: true}));

// This is to allow our api for parsing json.
app.use(express.json());

// This is to allow our api for cross-origin resource sharing.
app.use(cors(
    origin: "http://localhost:3000",
    methods: " GET, POST, PUT, DELETE",
    Credentials: true
));

// Import Routes and create router
const loginRouter = require('./Routes/LoginRoute');
const signUpRouter = require('./Routes/SignUpRoute');
const forgetRouter = require('./Routes/ForgetRoute');
const authRouter = require('./Routes/AuthRoute');

// Route Middlewares
app.use('/Login', loginRouter);
app.use('/Register', signUpRouter);
app.use('/Forget', forgetRouter);
app.use('./auth', authRouter);

// Apply error handler to every call
app.use(ErrorHandler);

// Connect to MongoDB Atlas database
mongoose.connect(ATLAS_URI, {
    useNewUrlParser: true
}).then(() => console.log('*** MongoDB connection established! ***'))
.catch(err => console.log(err));

// Check what PORT the app is listening to
app.listen(PORT, () => {
    console.log(`*** Server is listening on port ${PORT} ***`);
});

// testing connection
app.get('/', (req, res) => {
    res.send("hello world")
})
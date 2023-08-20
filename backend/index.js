// import express
const express = require('express');

// initiliaze express app
const app = express();
const port = 5000;

const cors = require('cors');

// import routers
const UserRouter = require('./routers/Slotbooking');
const SlotRouter = require('./routers/Slotbooking');
const UtilRouter = require('./routers/util');

// middleware to convert json data to javascript object
app.use(cors({
    origin : ['http://localhost:3000']
}));
app.use(express.json());

// middlewares
app.use('/slot', SlotRouter);
app.use('/user', UserRouter);
app.use('/util', UtilRouter);

app.use(express.static('./uploads'));

// creating routes
app.get('/', (req, res) => {
    res.send('response from express server');
});

app.get('/home', (req, res) => {
    res.send('response from home')
});

app.get('/add', (req, res) => {
    res.send('response from add');
});

// starting the server
app.listen(port,  () => {
    console.log('express server started successfully');
});
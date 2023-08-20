const mongoose = require('mongoose');

const url = 'mongodb+srv://PriyanshuChaubey29:Priyanshu2908@cluster0.mjm3gew.mongodb.net/parkingslot?retryWrites=true&w=majority';

// asynchronous function - returns a promise
mongoose.connect(url)
.then((result) => {
    // console.log(result);
    console.log('connected to mongodb');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;
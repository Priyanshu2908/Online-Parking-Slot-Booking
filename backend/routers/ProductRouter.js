const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
    res.send('response from Product add');
});

router.get('/getall', (req, res) => {
    res.send('response from Product getall');
})

router.get('/getbyid', (req, res) => {
    res.send('response from Product getbyid');
})


module.exports = router;
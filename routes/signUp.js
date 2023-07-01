var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function (req, res,next) {
    res.render('signUp', {
        title: 'Register',
        style: 'signUp.css'
    });
});
router.post('/', function (req, res,next) {
    console.log(req.body)
    res.send("Form submited successfull")


});

module.exports = router;
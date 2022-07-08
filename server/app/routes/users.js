const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res)=>{
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const phonenumber = req.body.phonenumber;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User ({username, phonenumber, email, password});

     newUser.save()
        .then(()=>res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
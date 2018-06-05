const express = require('express');
const mongoose = require('mongoose');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const router = express.Router();

const {User, validate} = require('../models/user');

router.get('/', async (req, res) => {
    let user = await User.find();
    res.send(user);
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const { error } = validate(req.body);
    if(error)
    {
        console.log(error);
        return res.status(400).send(error.details[0].message);
    }
    
    console.log(req.body);
    let user = await User.findOne({email: req.body.email});
    if(user)
        return res.status(400).send('User already exists');
    
    user = new User(_.pick(req.body, ['name', 'email', 'password']));

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    
    await user.save();

    res.send(_.pick(user, ['name', 'email']));
});

module.exports = router;
const express = require('express');
const mongoose = require('mongoose');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const Joi = require('joi');

const { User } = require('../models/user');

const router = express.Router();


router.post('/', async (req, res) => {
    try
    {
        const { error } = validate(req.body);
        if(error)
        {
            console.log(error);
            return res.status(400).send('Either email or password wrong');
        }
    
        user = await User.findOne({email: req.body.email});
        if(!user)
            return res.status(400).send('Either email or password wrong');
        
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        
        if(!isPasswordValid)
            return res.status(400).send('Either email or password wrong');
        
        const jwttoken = jwt.sign({_id: user._id,}, config.get('jwtPrivateKey'));
        console.log('jwt token', jwttoken);
        res.send(jwttoken);
    }
    catch(err)
    {
        console.log(err);
    }
});

function validate(userDetails)
{
    const schema = {
        email: Joi.string().min(5).max(250).required().email(),
        password: Joi.string().min(3).max(1024).required()
    };

    return Joi.validate(userDetails, schema);
}

module.exports = router;
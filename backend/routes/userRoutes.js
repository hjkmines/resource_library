const express = require('express');
const User = require("../models/users");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");


const userRoutes = express.Router();

const genToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: '60d' });
}

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPasswords(password))) {
        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            isAdmin: user.isAdmin,
            token: genToken(user._id)
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password.')
    }
});

//POST register user
const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400)
        throw new Error("We already have an account with that email address. ");
    }

    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
            token: genToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

userRoutes.route('/login').post(loginUser);
userRoutes.route('/register').post(registerUser);

module.exports = userRoutes;
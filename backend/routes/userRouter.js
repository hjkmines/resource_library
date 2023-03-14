const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.get('/', userController.getUsers);
userRouter.post('/', userController.postUser);
userRouter.delete('/', userController.deleteUsers);
userRouter.get('/:id', userController.getUser);
userRouter.put('/:id', userController.putUser);
userRouter.delete('/:id', userController.deleteUser);
userRouter.post('/login', userController.loginUser);
userRouter.post('/register', userController.registerUser);

module.exports = userRouter;
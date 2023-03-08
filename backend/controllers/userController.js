const User = require('../models/users');

const getUsers = async (req, res, next) => {
  try {
    const result = await User.find()

    res
      .status(200)
      .setHeader('Content-Type', 'application/json')
      .json(result)
  } catch (err) {
    throw new Error(`Error retrieving users: ${err.message}`)
  }
}

const postUser = async (req, res, next) => {
  try {
    const result = await User.create(req.body)

    res
      .status(201)
      .setHeader('Content-Type', 'application/json')
      .json(result)
  } catch (err) {
    throw new Error(`Error displaying a new user: ${err.message}`)
  }
}

const deleteUsers = async (req, res, next) => {
  res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({
      success: true,
      msg: 'All users were deleted'
    })
}

const getUser = async (req, res, next) => {

}

const putUser = async (req, res, next) => {

}

const deleteUser = async (req, res, next) => {

}

module.exports = {
  getUsers,
  postUser,
  deleteUsers,
  getUser,
  putUser,
  deleteUser
}
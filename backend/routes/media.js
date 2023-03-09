const express = require('express')

const {getMedia, createMedia, deleteMedia} = require('../controllers/mediaController')

const router = express.Router()

router.route('/')
	.get(getMedia)
	.post(createMedia)
	.delete(deleteMedia)

module.exports = router

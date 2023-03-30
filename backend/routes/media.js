const express = require('express')

const {
    getMedias,
    createMedia,
    deleteMedias,
    getMedia,
    putMedia,
    deleteMedia,
} = require('../controllers/mediaController');

const router = express.Router()

router.route('/')
	.get(getMedias)
	.post(createMedia)
	.delete(deleteMedias)

router.route('/:mediaId')
	.get(getMedia)
	.put(putMedia)
	.delete(deleteMedia)

module.exports = router

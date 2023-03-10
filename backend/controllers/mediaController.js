const Media = require('../models/media');

const getMedia = async (req, res, next) => {
    try {
        const media = await Media.find();
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({message: 'Found media', media});
    } catch (err){
        next(err);
    }
}

const createMedia = async (req, res, next) => {
    try {
        const media = await Media.create(req.body)
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({message: 'Created media', media});
    } catch (err) {
        next(err)
    }
}

const deleteMedia = async (req, res, next) => {
    try {
        const media = await Media.deleteMany();
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({message: 'Deleted media', media});
    } catch (err) {
        next(err);
    }
}

// Exports
module.exports = {
    getMedia,
    createMedia,
    deleteMedia,
}
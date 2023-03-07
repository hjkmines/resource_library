const Media = require('../models/media');

const getMedia = async (req, res, next) => {
    try {
        const media = await Media.find();
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(media);
    } catch (err){
        next(err);
    }
}

const createMedia = async (req, res, next) => {
    try {
        const media = await Media.create(req.body);
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(media);
    } catch {
        next(err)
    }
}

const deleteMedia = async (req, res, next) => {
    try {
        const media = await Media.deleteMedia();
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(media);
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
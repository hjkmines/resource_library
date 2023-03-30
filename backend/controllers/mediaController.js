const { update } = require('../models/media');
const Media = require('../models/media');

const getMedias = async (req, res, next) => {
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

const deleteMedias = async (req, res, next) => {
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

// router.route('/media/:mediaId')

const getMedia = async (req, res, next) => {
    try {
        const media = await Media.findById();
        res.status(200)
            .setHeader('Content-Type', 'application/json')
            .json({ message: 'Found media', media });
    } catch (err) {
        next(err);
    }
};

const putMedia = async (req, res, next) => {
    try {
        const media = await Media.findByIdAndUpdate(req.params.mediaId, req.body, {new: true});
        res.status(201)
            .setHeader('Content-Type', 'application/json')
            .json({ message: 'Updated media by Id', media });
    } catch (err) {
        next(err);
    }
};

const deleteMedia = async (req, res, next) => {
    try {
        const media = await Media.findByIdAndDelete(req.params.mediaId);
        res.status(200)
            .setHeader('Content-Type', 'application/json')
            .json({ message: 'Deleted media', media });
    } catch (err) {
        next(err);
    }
};

// Exports
module.exports = {
    getMedias,
    createMedia,
    deleteMedias,
    getMedia,
    putMedia,
    deleteMedia
}
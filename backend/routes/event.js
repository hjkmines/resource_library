const express = require('express');
const router = express.Router();

const {
    getAllEvents,
    createEvent,
    getEventById,
    updateEvent,
    deleteEvent,
} = require('../controllers/eventController');

router.route('/').get(getAllEvents).post(createEvent).delete(deleteEvent);


router.route('/:routeId').get(getEventById).put(updateEvent).delete(deleteEvent);


module.exports = router;

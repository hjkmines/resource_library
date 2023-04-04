const express = require('express');
const router = express.Router();

const {
    getEvents,
    postEvent,
    deleteEvents,
    getEvent,
    putEvent,
    deleteEvent,
} = require('../controllers/eventController');

router.Route('/').get(getEvents).post(postEvent).delete(deleteEvents);

router.Route('/:routeId').get(getEvent).put(putEvent).delete(deleteEvent);


module.exports = router;

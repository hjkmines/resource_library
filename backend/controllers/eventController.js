const Event = require('../models/event');

//ALL Events---------
const getAllEvents = async (req, res, next) => {
  try {
    //fetching all events from the database and returning w/a status code of 200
      const events = await Event.find();
      res
      .status(200)
      .setHeader('Content-Type', 'application/json')
      .json(events);
  } catch (err){
      next(err);
  }
};

//SINGLE Event---------
const getEventById = async (req, res, next) => {
  try {
    //id of event from the request parameters
    const eventId = req.params.id;
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (err) {
    next(err);
  }
};

//CREATE Event---------
const createEvent = async (req, res, next) => {
  try {
      const event = await Event.create(req.body);
      res
      .status(201)
      .setHeader('Content-Type', 'application/json')
      .json(event);
  } catch {
      next(err)
  }
};

//UPDATE Event---------
const updateEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const updatedEvent = await Event.findByIdAndUpdate(eventId, req.body, { new: true });
    //setting the new to 'true'-->making sure the updated event is returned and not the old one
    res.status(200).json(updatedEvent);
  } catch (err) {
    next(err);
  }
};

//DELETE Event----------
const deleteEvent = async (req, res, next) => {
  try {
      const eventId = req.params.id;
      const deletedEvent = await Event.findByIdAndDelete(eventId);
      if (!deletedEvent) {
        return res.status(404).json({ message: 'Event not found' });
      }
      res.status(200).json(deletedEvent);
  } catch (err) {
      next(err);
  }
};



// Exports
module.exports = {
    getAllEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent,
};
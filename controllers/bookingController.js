// controllers/bookingController.js

const bookingService = require('../services/bookingService');

const getAllBookings = async (req, res) => {
  try {
    const bookings = await bookingService.getAllBookings();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBookingById = async (req, res) => {
  try {
    const booking = await bookingService.getBookingById(req.params.id);
    if (booking) {
      res.status(200).json(booking);
    } else {
      res.status(404).json({ error: 'Reserva não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createBooking = async (req, res) => {
  try {
    const { date, start_time, end_time, status, client_id, room_id} = req.body;
    const newBooking = await bookingService.createBooking(date, start_time, end_time, status, client_id, room_id);
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBooking = async (req, res) => {
  try {
    const { date, start_time, end_time, status, client_id, room_id } = req.body;
    const updatedBooking = await bookingService.updateBooking(req.params.id, date, start_time, end_time, status, client_id, room_id);
    if (updatedBooking) {
      res.status(200).json(updatedBooking);
    } else {
      res.status(404).json({ error: 'Reserva não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const deletedBooking = await bookingService.deleteBooking(req.params.id);
    if (deletedBooking) {
      res.status(200).json(deletedBooking);
    } else {
      res.status(404).json({ error: 'Reserva não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking
};
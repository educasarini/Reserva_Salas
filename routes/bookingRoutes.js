const express        = require('express');
const router         = express.Router();
const bookingService = require('../services/bookingService');

// Listar todas as reservas (Read)
router.get('/', async (req, res, next) => {
  try {
    const bookings = await bookingService.getAllBookings();
    res.json(bookings);
  } catch (err) {
    next(err);
  }
});

// Buscar 1 reserva por ID (Read)
router.get('/:id', async (req, res, next) => {
  try {
    const booking = await bookingService.getBookingById(req.params.id);
    res.json(booking);
  } catch (err) {
    next(err);
  }
});

// Criar nova reserva (Create)
router.post('/', async (req, res, next) => {
  try {
    const { client_id, room_id, date, start_time, end_time } = req.body;
    const newBooking = await bookingService.createBooking({
      client_id,
      room_id,
      date,
      start_time,
      end_time
    });
    res.status(201).json(newBooking);
  } catch (err) {
    next(err);
  }
});

// Atualizar reserva existente (Update)
router.put('/:id', async (req, res, next) => {
  try {
    const { client_id, room_id, date, start_time, end_time } = req.body;
    await bookingService.updateBooking(req.params.id, {
      client_id,
      room_id,
      date,
      start_time,
      end_time
    });
    res.status(200).json({ message: 'Reserva atualizada' });
  } catch (err) {
    next(err);
  }
});

// Excluir reserva (Delete)
// DELETE /api/clients/:id
router.delete('/:id', async (req, res, next) => {
  try {
    await clientService.deleteClient(req.params.id);
    res.status(200).json({ message: 'Reserva excluído' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
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
    const bookingData = req.body;
    // Definir status padrão se não for fornecido
    if (!bookingData.status) {
      bookingData.status = 'pending';
    }
    
    const newBooking = await bookingService.createBooking(bookingData);
    res.status(201).json(newBooking);
  } catch (err) {
    console.error('Erro ao criar reserva:', err);
    next(err);
  }
});

// Atualizar reserva existente (Update)
router.put('/:id', async (req, res, next) => {
  try {
    const bookingData = req.body;
    // Definir status padrão se não for fornecido
    if (!bookingData.status) {
      bookingData.status = 'pending';
    }
    
    const updatedBooking = await bookingService.updateBooking(req.params.id, bookingData);
    if (!updatedBooking) {
      return res.status(404).json({ error: 'Reserva não encontrada' });
    }
    res.status(200).json({ message: 'Reserva atualizada', data: updatedBooking });
  } catch (err) {
    console.error('Erro ao atualizar reserva:', err);
    next(err);
  }
});

// Excluir reserva (Delete)
// DELETE /api/clients/:id
router.delete('/:id', async (req, res, next) => {
  try {
    await bookingService.deleteBooking(req.params.id);
    res.status(200).json({ message: 'Reserva excluída' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

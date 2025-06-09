// routes/frontRoutes.js
const express        = require('express');
const router         = express.Router();
const clientService  = require('../services/clientService');
const roomService    = require('../services/roomService');
const bookingService = require('../services/bookingService');

// Lista de Clientes
router.get('/clients', async (req, res, next) => {
  try {
    const clients = await clientService.getAllClients();
    // 1) renderiza a tabela em HTML (clients-list.ejs) como string
    res.render('pages/clients-list', { clients }, (err, html) => {
      if (err) return next(err);
      // 2) injeta esse html no layout principal
      res.render('layout/main', {
        pageTitle: 'Lista de Clientes',
        body: html
      });
    });
  } catch (e) {
    next(e);
  }
});

// Lista de Salas
router.get('/rooms', async (req, res, next) => {
  try {
    const rooms = await roomService.getAllRooms();
    res.render('pages/rooms-list', { rooms }, (err, html) => {
      if (err) return next(err);
      res.render('layout/main', {
        pageTitle: 'Lista de Salas',
        body: html
      });
    });
  } catch (e) {
    next(e);
  }
});

// Lista de Reservas
router.get('/bookings', async (req, res, next) => {
  try {
    const bookings = await bookingService.getAllBookings();
    res.render('pages/bookings-list', { bookings }, (err, html) => {
      if (err) return next(err);
      res.render('layout/main', {
        pageTitle: 'Lista de Reservas',
        body: html
      });
    });
  } catch (e) {
    next(e);
  }
});

// Formulário de Novo Cliente
router.get('/clients/new', (req, res, next) => {
  res.render('pages/client-form', {}, (err, html) => {
    if (err) return next(err);
    res.render('layout/main', {
      pageTitle: 'Novo Cliente',
      body: html
    });
  });
});

// Formulário de Nova Sala
router.get('/rooms/new', (req, res, next) => {
  res.render('pages/room-form', {}, (err, html) => {
    if (err) return next(err);
    res.render('layout/main', {
      pageTitle: 'Nova Sala',
      body: html
    });
  });
});

// Formulário de Nova Reserva
router.get('/bookings/new', (req, res, next) => {
  res.render('pages/booking-form', {}, (err, html) => {
    if (err) return next(err);
    res.render('layout/main', {
      pageTitle: 'Nova Reserva',
      body: html
    });
  });
});

module.exports = router;
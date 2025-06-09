const express     = require('express');
const router      = express.Router();
const roomService = require('../services/roomService');

// Listar todas as salas (Read)
router.get('/', async (req, res, next) => {
  try {
    const rooms = await roomService.getAllRooms();
    res.json(rooms);
  } catch (err) {
    next(err);
  }
});

// Buscar 1 sala por ID (Read)
router.get('/:id', async (req, res, next) => {
  try {
    const room = await roomService.getRoomById(req.params.id);
    res.json(room);
  } catch (err) {
    next(err);
  }
});

// Criar nova sala (Create)
router.post('/', async (req, res, next) => {
  try {
    // extraia todos os campos que o service espera
    const { name, location, capacity } = req.body;
    // coloque um valor default para 'available' (por ex. true)
    const available = true;

    // chame o service com os parâmetros corretos
    const newRoom = await roomService.createRoom(
      name,
      parseInt(capacity, 10),  // certifica número
      location,
      available
    );
    res.status(201).json(newRoom);
  } catch (err) {
    next(err);
  }
});


// Atualizar sala existente (Update)
router.put('/:id', async (req, res, next) => {
  try {
    const { name, location, capacity } = req.body;
    const available = true;

    await roomService.updateRoom(
      req.params.id,
      name,
      parseInt(capacity, 10),
      location,
      available
    );
    res.status(200).json({ message: 'Sala atualizada' });
  } catch (err) {
    next(err);
  }
});

// Excluir sala (Delete)
// DELETE /api/clients/:id
router.delete('/:id', async (req, res, next) => {
  try {
    await clientService.deleteClient(req.params.id);
    res.status(200).json({ message: 'Sala excluído' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
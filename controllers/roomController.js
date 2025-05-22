// controllers/roomController.js

const roomService = require('../services/roomService');

const getAllRoom = async (req, res) => {
  try {
    const rooms = await roomService.getAllRooms();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRoomById = async (req, res) => {
  try {
    const room = await roomService.getRoomById(req.params.id);
    if (room) {
      res.status(200).json(room);
    } else {
      res.status(404).json({ error: 'Sala não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createRoom = async (req, res) => {
  try {
    const { name, capacity, location, available } = req.body;
    const newRoom = await roomService.createRoom(name, capacity, location, available);
    res.status(201).json(newRoom);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRoom = async (req, res) => {
  try {
    const { name, capacity, location, available } = req.body;
    const updatedRoom = await roomService.updateRoom(req.params.id, name, capacity, location, available);
    if (updatedRoom) {
      res.status(200).json(updatedRoom);
    } else {
      res.status(404).json({ error: 'Sala não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteRoom = async (req, res) => {
  try {
    const deletedRoom = await roomService.deleteRoom(req.params.id);
    if (deletedRoom) {
      res.status(200).json(deletedRoom);
    } else {
      res.status(404).json({ error: 'Sala não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllRoom,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom
};
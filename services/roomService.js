// services/roomService.js

const db = require('../config/db');

// Função para obter todos as salas
const getAllRooms = async () => {
  try {
    const result = await db.query('SELECT * FROM room');
    return result.rows;
  } catch (error) {
    throw new Error('Erro ao obter sala: ' + error.message);
  }
};

// Função para obter uma sala por ID
const getRoomById = async (id) => {
  try {
    const result = await db.query('SELECT * FROM room WHERE id = $1', [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao obter sala: ' + error.message);
  }
};

// Função para criar um nova sala
const createRoom = async (name, capacity, location, available) => {
  try {
    const result = await db.query(
      'INSERT INTO room (name, capacity, location, available) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, capacity, location, available]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao criar sala: ' + error.message);
  }
};

// Função para atualizar uma sala por ID
const updateRoom = async (id, name, capacity, location, available) => {
  try {
    const result = await db.query(
      'UPDATE room SET name = $1, capacity = $2, location = $3, available = $4 WHERE id = $5 RETURNING *',
      [name, capacity, location, available, id]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao atualizar sala: ' + error.message);
  }
};

// Função para deletar uma sala por ID
const deleteRoom = async (id) => {
  try {
    const result = await db.query('DELETE FROM room WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao deletar sala: ' + error.message);
  }
};

module.exports = {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom
};
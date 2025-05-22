// services/bookingService.js

const db = require('../config/db');

// Função para obter todos as reservas
const getAllBooking = async () => {
  try {
    const result = await db.query('SELECT * FROM booking');
    return result.rows;
  } catch (error) {
    throw new Error('Erro ao obter as reservas: ' + error.message);
  }
};

// Função para obter a reserva por ID
const getBookingById = async (id) => {
  try {
    const result = await db.query('SELECT * FROM booking WHERE id = $1', [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao obter reserva: ' + error.message);
  }
};

// Função para criar um nova reserva
const createBooking = async (date, start_time, end_time, status) => {
  try {
    const result = await db.query(
      'INSERT INTO booking (date, start_time, end_time, status) VALUES ($1, $2, $3, $4) RETURNING *',
      [date, start_time, end_time, status]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao criar reserva: ' + error.message);
  }
};

// Função para atualizar uma reserva por ID
const updateBooking = async (id, date, start_time, end_time, status) => {
  try {
    const result = await db.query(
      'UPDATE booking SET date = $1, start_time = $2, end_time = $3, status = $4 WHERE id = $5 RETURNING *',
      [date, start_time, end_time, status, id]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao atualizar reserva: ' + error.message);
  }
};

// Função para deletar uma reserva por ID
const deleteBooking = async (id) => {
  try {
    const result = await db.query('DELETE FROM booking WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao deletar reserva: ' + error.message);
  }
};

module.exports = {
  getAllBooking,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking
};
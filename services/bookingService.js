// services/bookingService.js

const db = require('../config/db');

// Função para obter todos as reservas
const getAllBookings = async () => {
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
const createBooking = async (bookingData) => {
  try {
    const { date, start_time, end_time, status = 'pending', client_id, room_id } = bookingData;
    
    const result = await db.query(
      'INSERT INTO booking (date, start_time, end_time, status, client_id, room_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [date, start_time, end_time, status, client_id, room_id]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao criar reserva: ' + error.message);
  }
};

// Função para atualizar uma reserva por ID
const updateBooking = async (id, bookingData) => {
  try {
    const { date, start_time, end_time, status = 'pending', client_id, room_id } = bookingData;
    
    console.log('Serviço updateBooking recebeu:', { id, date, start_time, end_time, status, client_id, room_id });
    
    const result = await db.query(
      'UPDATE booking SET date = $1, start_time = $2, end_time = $3, status = $4, client_id = $5, room_id = $6 WHERE id = $7 RETURNING *',
      [date, start_time, end_time, status, client_id, room_id, id]
    );
    
    if (result.rows.length === 0) {
      console.log('Nenhuma reserva encontrada para atualização com ID:', id);
      return null;
    }
    
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
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking
};

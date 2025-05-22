// services/clientService.js

const db = require('../config/db');

// Função para obter todos os usuários
const getAllClients = async () => {
  try {
    const result = await db.query('SELECT * FROM client');
    return result.rows;
  } catch (error) {
    throw new Error('Erro ao obter clientes: ' + error.message);
  }
};

// Função para obter um usuário por ID
const getClientById = async (id) => {
  try {
    const result = await db.query('SELECT * FROM client WHERE id = $1', [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao obter cliente: ' + error.message);
  }
};

// Função para criar um novo usuário
const createClient = async (name, email) => {
  try {
    const result = await db.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao criar usuário: ' + error.message);
  }
};

// Função para atualizar um usuário por ID
const updateClient = async (id, name, email) => {
  try {
    const result = await db.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
      [name, email, id]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao atualizar usuário: ' + error.message);
  }
};

// Função para deletar um usuário por ID
const deleteClient = async (id) => {
  try {
    const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao deletar usuário: ' + error.message);
  }
};

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient
};
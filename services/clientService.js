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
const createClient = async (name, email, password, role) => {
  try {
    const result = await db.query(
      'INSERT INTO client (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, password, role]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao criar cliente: ' + error.message);
  }
};

// Função para atualizar um usuário por ID
const updateClient = async (id, name, email, password, role) => {
  try {
    const result = await db.query(
      'UPDATE client SET name = $1, email = $2, password = $3, role = $4 WHERE id = $6 RETURNING *',
      [name, email, password, role, id]
    );
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao atualizar cliente: ' + error.message);
  }
};

// Função para deletar um usuário por ID
const deleteClient = async (id) => {
  try {
    const result = await db.query('DELETE FROM client WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao deletar cliente: ' + error.message);
  }
};

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient
};
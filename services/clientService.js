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
    console.log('Serviço updateClient recebeu:', { id, name, email, password, role });
    
    const result = await db.query(
      'UPDATE client SET name = $1, email = $2, password = $3, role = $4 WHERE id = $5 RETURNING *',
      [name, email, password, role, id]
    );
    
    if (result.rows.length === 0) {
      console.log('Nenhum cliente encontrado para atualização com ID:', id);
      return null;
    }
    
    console.log('Cliente atualizado com sucesso:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao atualizar cliente:', error);
    throw new Error('Erro ao atualizar cliente: ' + error.message);
  }
};

// Função para deletar um usuário por ID
const deleteClient = async (id) => {
  try {
    console.log('Tentando excluir cliente com ID:', id);
    
    // Verificar se existem reservas associadas a este cliente
    const bookingCheck = await db.query('SELECT COUNT(*) FROM booking WHERE client_id = $1', [id]);
    
    if (parseInt(bookingCheck.rows[0].count) > 0) {
      throw new Error('Não é possível excluir este cliente pois existem reservas associadas a ele');
    }
    
    const result = await db.query('DELETE FROM client WHERE id = $1 RETURNING *', [id]);
    console.log('Resultado da exclusão:', result.rows);
    
    if (result.rows.length === 0) {
      return null; // Cliente não encontrado
    }
    
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao deletar cliente:', error);
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

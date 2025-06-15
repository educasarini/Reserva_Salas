const { Pool } = require('pg');
require('dotenv').config();

const isSSL = process.env.DB_SSL === 'true';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: isSSL ? { rejectUnauthorized: false } : false,
});

// Adicione logs para depuração
const query = async (text, params) => {
  try {
    console.log('Executando query:', { text, params });
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Query executada:', { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('Erro na execução da query:', error);
    throw error;
  }
};

module.exports = {
  query,
  connect: () => {
    return new Promise((resolve, reject) => {
      pool.connect((err, client, release) => {
        if (err) {
          console.error('Erro ao conectar ao banco de dados:', err);
          reject(err);
          return;
        }
        console.log('Conexão com o banco de dados estabelecida');
        release();
        resolve();
      });
    });
  }
};

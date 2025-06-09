require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/db');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

db.connect()
  .then(() => {
    console.log('Conectado ao banco de dados PostgreSQL');

    app.use(express.json());

    // Servir CSS e JS estáticos da pasta views/css e views/script
    app.use('/css', express.static(path.join(__dirname, 'views/css')));
    app.use('/js',  express.static(path.join(__dirname, 'views/script')));


    app.use('/api/clients',  require('./routes/clientRoutes'));
    app.use('/api/rooms',    require('./routes/roomRoutes'));
    app.use('/api/bookings', require('./routes/bookingRoutes'));
    app.use('/', require('./routes/frontRoutes'));


    // Middleware para lidar com erros de rota não encontrada
    app.use((req, res, next) => {
      res.status(404).send('Página não encontrada');
    });

    // Middleware para lidar com erros internos do servidor
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Erro no servidor');
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

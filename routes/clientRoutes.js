const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.get('/', clientController.getAllClients);
router.get('/:id', clientController.getClientById);
router.post('/', clientController.createClient);
// Atualizar Cliente (Update)
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, password, role } = req.body;
    console.log('Rota PUT /clients/:id recebeu:', { id, body: req.body });
    
    const clientService = require('../services/clientService');
    const updatedClient = await clientService.updateClient(id, name, email, password, role);
    
    if (!updatedClient) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    
    res.status(200).json({ message: 'Cliente atualizado', data: updatedClient });
  } catch (err) {
    console.error('Erro na rota de atualização de cliente:', err);
    res.status(400).json({ error: err.message });
  }
});

// Excluir Cliente (Delete)
router.delete('/:id', async (req, res, next) => {
  try {
    console.log('Recebida solicitação para excluir cliente:', req.params.id);
    const clientService = require('../services/clientService'); // Garantir que o serviço está disponível
    const result = await clientService.deleteClient(req.params.id);
    
    if (!result) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    
    res.status(200).json({ message: 'Cliente excluído', data: result });
  } catch (err) {
    console.error('Erro na rota de exclusão de cliente:', err);
    res.status(400).json({ error: err.message });
  }
});



module.exports = router;

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
    await clientService.updateClient(id, { name, email, password, role });
    res.status(200).json({ message: 'Cliente atualizado' });
  } catch (err) {
    next(err);
  }
});

// Excluir Cliente (Delete)
// DELETE /api/clients/:id
router.delete('/:id', async (req, res, next) => {
  try {
    await clientService.deleteClient(req.params.id);
    res.status(200).json({ message: 'Cliente excluído' });
  } catch (err) {
    next(err);
  }
});



module.exports = router;

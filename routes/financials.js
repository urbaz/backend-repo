const express = require('express');
const router = express.Router();
const Financial = require('../models/Financial');

// GET all financial entries
router.get('/', async (req, res) => {
  try {
    const financials = await Financial.findAll();
    res.json(financials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new financial entry
router.post('/', async (req, res) => {
  try {
    const financial = await Financial.create(req.body);
    res.status(201).json(financial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT update financial entry
router.put('/:id', async (req, res) => {
  try {
    const financial = await Financial.findByPk(req.params.id);
    if (!financial) return res.status(404).json({ error: 'Financial entry not found' });
    
    await financial.update(req.body);
    res.json(financial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE financial entry
router.delete('/:id', async (req, res) => {
  try {
    const financial = await Financial.findByPk(req.params.id);
    if (!financial) return res.status(404).json({ error: 'Financial entry not found' });
    
    await financial.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
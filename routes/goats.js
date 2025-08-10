const express = require('express');
const router = express.Router();
const Goat = require('../models/Goat');

// Get all goats
router.get('/', async (req, res) => {
  try {
    const goats = await Goat.findAll();
    res.json(goats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add new goat
router.post('/', async (req, res) => {
  try {
    const goat = await Goat.create(req.body);
    res.status(201).json(goat);
  } catch (error) {
    res.status(400).json({ 
      error: error.message,
      details: error.errors?.map(e => e.message) 
    });
  }
});

// Update goat
router.put('/:id', async (req, res) => {
  try {
    const goat = await Goat.findByPk(req.params.id);
    if (!goat) return res.status(404).json({ error: 'Goat not found' });
    
    await goat.update(req.body);
    res.json(goat);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete goat
router.delete('/:id', async (req, res) => {
  try {
    const goat = await Goat.findByPk(req.params.id);
    if (!goat) return res.status(404).json({ error: 'Goat not found' });
    
    await goat.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
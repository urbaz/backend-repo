const express = require('express');
const router = express.Router();
const Medication = require('../models/Medication');

// GET all medications
router.get('/', async (req, res) => {
  try {
    const medications = await Medication.findAll();
    res.json(medications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new medication
router.post('/', async (req, res) => {
  try {
    const medication = await Medication.create(req.body);
    res.status(201).json(medication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT update medication
router.put('/:id', async (req, res) => {
  try {
    const medication = await Medication.findByPk(req.params.id);
    if (!medication) return res.status(404).json({ error: 'Medication not found' });
    
    await medication.update(req.body);
    res.json(medication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE medication
router.delete('/:id', async (req, res) => {
  try {
    const medication = await Medication.findByPk(req.params.id);
    if (!medication) return res.status(404).json({ error: 'Medication not found' });
    
    await medication.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
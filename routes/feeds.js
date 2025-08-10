const express = require('express');
const router = express.Router();
const Feed = require('../models/Feed');

// GET all feed items
router.get('/', async (req, res) => {
  try {
    const feeds = await Feed.findAll();
    res.json(feeds);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new feed item
router.post('/', async (req, res) => {
  try {
    const feed = await Feed.create(req.body);
    res.status(201).json(feed);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT update feed item
router.put('/:id', async (req, res) => {
  try {
    const feed = await Feed.findByPk(req.params.id);
    if (!feed) return res.status(404).json({ error: 'Feed item not found' });
    
    await feed.update(req.body);
    res.json(feed);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE feed item
router.delete('/:id', async (req, res) => {
  try {
    const feed = await Feed.findByPk(req.params.id);
    if (!feed) return res.status(404).json({ error: 'Feed item not found' });
    
    await feed.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
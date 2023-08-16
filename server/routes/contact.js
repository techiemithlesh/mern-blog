const express = require('express');
const router = express.Router();
const Contact = require('../model/Contact');


// GET all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET a single contact by ID
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE a new contact
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    const savedContact = await contact.save();
    res.json(savedContact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE a contact by ID
router.put('/:id', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { name, email, message },
      { new: true }
    );
    res.json(updatedContact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE a contact by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndRemove(req.params.id);
    res.json(deletedContact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

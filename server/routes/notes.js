const express = require('express');
const router = express.Router();
const Notes = require('../model/Notes');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Set up Multer storage for notes
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/notes');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = file.originalname.split('.').pop();
    cb(null, 'note-' + uniqueSuffix + '.' + ext);
  },
});

// Set up Multer storage for images
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/notes/images');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = file.originalname.split('.').pop();
    cb(null, 'image-' + uniqueSuffix + '.' + ext);
  },
});

// Create Multer instance for notes upload
const notesUpload = multer({ storage });

// Create Multer instance for image upload
const imageUpload = multer({ storage: imageStorage });

// Create a new note
router.post('/', notesUpload.single('note'), imageUpload.single('image'), async (req, res) => {
  try {
    const { name } = req.body;
    const fileName = req.file.originalname;
    const imageUrl = req.file.filename;
    const image = req.file ? req.file.filename : null; // Store the image URL

    const note = new Notes({ name, fileName, image });
    const savedNote = await note.save();
    res.json(savedNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rest of the CRUD operations...

module.exports = router;

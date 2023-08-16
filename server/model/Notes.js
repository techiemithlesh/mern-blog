const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fileName: { type: String, required: true },
  image: { type: String } // Add the image field
});

const Notes = mongoose.model('Notes', notesSchema);

module.exports = Notes;

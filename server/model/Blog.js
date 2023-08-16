const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  keywords: [{ type: String }],
  metaDescription: { type: String },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

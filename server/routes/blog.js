const express = require('express');
const router = express.Router();
const Blog = require('../model/Blog');
const multer = require('multer');
const fs = require('fs');
const slugify = require('slugify');

// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/blogs');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
  },
});

const upload = multer({ storage: storage });

// Upload image
router.post('/upload-image', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: 'No image file uploaded' });
      return;
    }
    const imageUrl = '/uploads/blogs/' + req.file.filename;
    res.json({ imageUrl: imageUrl });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET a single blog by ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE a new blog
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, description, category, keywords, metaDescription } = req.body;
    const image = '/uploads/blogs/' + req.file.filename;
    const slug = slugify(title, { lower: true });
    const blog = new Blog({ title, description, image, category, slug,keywords,metaDescription });
    const savedBlog = await blog.save();
    res.json(savedBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE a blog by ID
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { title, description, category, keywords, metaDescription } = req.body;
    let image = req.body.image; 
    if (req.file) {
      // If a new image is uploaded, update the image URL
      image = '/uploads/blogs/' + req.file.filename;
      // Delete the previous image file
      const prevImage = await Blog.findById(req.params.id);
      if (prevImage.image) {
        const imagePath = `public${prevImage.image}`;
        fs.unlinkSync(imagePath);
      }
    }
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, description, image, category, keywords, metaDescription },
      { new: true }
    );
    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE a blog by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndRemove(req.params.id);
    // Delete the associated image file
    if (deletedBlog.image) {
      const imagePath = `public${deletedBlog.image}`;
      fs.unlinkSync(imagePath);
    }
    res.json(deletedBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Project = require('../model/Project');
const multer = require('multer');
const fs = require('fs');
const slugify = require('slugify');

// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/projects');
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
    const imageUrl = '/uploads/projects/' + req.file.filename;
    res.json({ imageUrl: imageUrl });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET a single project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE a new project
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, shortDescription, description, keywords, projectCategory, metaDescription, liveLink, demoLink } = req.body;
    const image = '/uploads/projects/' + req.file.filename;
    const slug = slugify(title, { lower: true });
    const project = new Project({ title, shortDescription, description, image, projectCategory, keywords, metaDescription, liveLink, demoLink });
    const savedProject = await project.save();
    res.json(savedProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE a project by ID
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { title, shortDescription, description, keywords, projectCategory, metaDescription, liveLink, demoLink } = req.body;
    let image = req.body.image; 
    if (req.file) {
      // If a new image is uploaded, update the image URL
      image = '/uploads/projects/' + req.file.filename;
      // Delete the previous image file
      const prevProject = await Project.findById(req.params.id);
      if (prevProject.image) {
        const imagePath = `public${prevProject.image}`;
        fs.unlinkSync(imagePath);
      }
    }
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { title, shortDescription, description, image, projectCategory, keywords, metaDescription, demoLink, liveLink },
      { new: true }
    );
    res.json(updatedProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE a project by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndRemove(req.params.id);
    // Delete the associated image file
    if (deletedProject.image) {
      const imagePath = `public${deletedProject.image}`;
      fs.unlinkSync(imagePath);
    }
    res.json(deletedProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

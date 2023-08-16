const express = require("express");
const cors = require('cors');
const db = require('./db/database');
const app = express();
require('dotenv').config();
const blogRoutes = require('./routes/blog');
const projectRoutes = require('./routes/project');
const notesRoutes = require('./routes/notes');
const contactRoutes = require('./routes/contact');
const {auth} = require('./middleware/auth');

app.use(cors());
app.use(express.json());


// ROUTES
app.use('/api/blogs', blogRoutes);
app.use("/api/projects", projectRoutes);
app.use('/api/notes', notesRoutes);
app.use('/api/contact', contactRoutes);


app.use('/', (req, res) => {
    res.send("Server Is Running");
});

const port = process.env.PORT || 7000;

app.listen(port, () => {
    console.log(`Server is listening at port ${port}...`);
});

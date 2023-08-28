const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    projectCategory: { type: String, required: true },
    keywords: { type: String },
    metaDescription: { type: String },
    demoLink: { type: String, required: true },
    liveLink: { type: String, required: true },
    status : {
        type: String,
        enum: ['draft', 'publish'],
        default: 'draft',
        required: true,
    }

})

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
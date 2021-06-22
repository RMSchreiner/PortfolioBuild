const mongoose = require('mongoose')
const Schema= mongoose.Schema;

const ProjectSchema = new Schema({
title: String,
body: String,
image1: String,
image2: String,
image3: String
});

const Project = 
mongoose.model('Project',ProjectSchema);
module.exports = Project


/* userid: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
}, */
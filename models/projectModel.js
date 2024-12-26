const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    studentId: { type: String, required: true },
    title: { type: String, required: true },
    filePath: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);

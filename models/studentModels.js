const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    studentId: { type: String, required: true, unique: true },
    class: { type: String },
    email: { type: String, required: true },
    contact: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);

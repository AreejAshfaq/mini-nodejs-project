const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const studentRoutes = require('./routes/studentRoutes');
const projectRoutes = require('./routes/projectRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/students', studentRoutes);
app.use('/projects', projectRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

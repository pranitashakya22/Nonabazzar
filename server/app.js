const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config'); // Loads .env file into process.env

app.use(cors());
app.options('*', cors());

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Database Connection is ready....');

    // Server
    const port = process.env.PORT || 4000; // Default to 4000 if PORT is not defined
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
})
.catch((err) => {
    console.log('Database Connection Error:', err);
});

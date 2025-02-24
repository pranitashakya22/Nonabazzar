const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config'); // Loads .env file into process.env
app.use(express.json());

app.use(cors());
app.options('*', cors());

// Middleware
app.use(bodyParser.json());

//Routes
const categoryRoutes = require('./routes/categories');
const productRoutes = require('./routes/products');

app.use(`/api/category`, categoryRoutes);
app.use(`/api/products`, productRoutes);

// MongoDB Connection
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Database Connection is ready....');

    // Server
    app.listen(process.env.PORT, () => {
        console.log(`Server is running at http://localhost:${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log('Database Connection Error:', err);
});

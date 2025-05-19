require('dotenv/config');
const express = require('express');
const cors = require('cors');
const http = require('http');
const apiRouter = require('./routes/index.js');

const app = express();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
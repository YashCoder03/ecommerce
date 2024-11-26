const express = require('express');
const cors = require('cors'); // Import the cors package
const db = require('./db/databaseConnection')
db()

const app = express()

const port = 8080;
const corsOptions = {
    credentials: true,
    origin: ['http://localhost:5173', 'http://localhost:8080'] // Whitelist the domains you want to allow
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port,()=>{
    console.log('Server is Listennig on port',port);
})

module.exports = app ;
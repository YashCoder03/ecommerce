import express, { json, urlencoded } from 'express';
import cors from 'cors'; // Import the cors package
import db from './db/databaseConnection.js';
db()

const app = express()

const port = 8080;
const corsOptions = {
    credentials: true,
    origin: ['http://localhost:5173', 'http://localhost:8080'] // Whitelist the domains you want to allow
};
app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

app.listen(port,()=>{
    console.log('Server is Listennig on port',port);
})

export default app ;
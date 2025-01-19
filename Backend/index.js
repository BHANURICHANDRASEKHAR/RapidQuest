import express from 'express';
import cors from 'cors';
import GetLayout from './SendLayout.js'
import connectToDatabase from './dataBase.js'
import SaveChanges from './SaveChanges.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectToDatabase();
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.get('/', (req, res) => {
    res.send('Hello, Express!');
})
app.use(GetLayout)
app.use(SaveChanges)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
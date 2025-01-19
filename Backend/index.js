import express from 'express';
import cors from 'cors';
import GetLayout from './SendLayout.js'
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
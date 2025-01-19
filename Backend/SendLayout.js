import express from 'express';
import { promises as fs } from 'fs'; // Use promises API from 'fs'

const router = express.Router();

router.get('/getLayout', async (req, res) => {
  try {
    const layout = await fs.readFile('./layout.json', 'utf-8'); 
    res.send({status:true, data: layout});
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

export default router;

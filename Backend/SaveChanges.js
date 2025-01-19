import express from 'express';
import Template from './Schema.js'; 
const router = express.Router();

router.post('/SaveChanges', async (req, res) => {
  const { data } = req.body;

  try {
    const result = await Template.create({ data });
    console.log('Saved data:', result);
    res.status(200).json({ message: 'Data saved successfully', result,status:true });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;

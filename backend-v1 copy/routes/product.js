import express from 'express';
import methods from '../controllers/products.js'
import upload from '../libs/storage.js';

const router = express.Router();


router.get('/products/:id?', methods.getMethod);

router.post('/products', upload.array('image', 4), methods.postMethod);

router.delete('/products/:id', (req,res) => {
    res.send('delete')
})

router.put('/products/:id', (req,res)=>{
    res.send('Put');
})

export default router;
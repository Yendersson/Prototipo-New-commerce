import express from "express";
import get from './db.js'

const router = express.Router();

router.get('/:id?', async (req,res)=>{

    let {id} = req.params

    if(id){
        let producto = await get.obtenerOne(id)
        console.log(producto);
        res.json(producto)
    }else{

    let productos =  await get.obtener()
    console.log(productos)
    res.json(productos);
    }
})

router.post('/', async (req,res)=>{
    let datos = req.body;
    
    let producto = await get.crear(datos);
    res.json(producto);
    
})

router.delete('/:id', async (req, res) =>{
    let {id} = req.params;
    let eliminar = await get.borrar(id);
    res.json(eliminar);
});

router.put('/:id', async (req, res)=>{
    let {id} = req.params;
    let datos = req.body;

    let modificar = await get.update(id, datos);
    res.json(modificar);
})

export default router;
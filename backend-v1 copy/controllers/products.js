import Product from '../model/model.js'

const getMethod = async (req,res)=>{


    let {id} = req.params;

    if(id){

        const producto = await Product.findOne({_id:id});
        console.log(producto);
        res.json(producto)

    }else{

        const productos = await Product.find({});
        console.log(productos);
        res.json(productos)
    }
}

const postMethod = async (req,res)=>{
    const{
        categoria,
        nombre,
        precio,
        descripcion,
        estado,
        location,
        usuario
    } = req.body;

    const productoNuevo = new Product({
        categoria,
        nombre,
        precio,
        descripcion,
        estado,
        location,
        usuario
    })

    if(req.files){
        // const { filename }  = req.files;
        productoNuevo.setImgUrl(req.files);
        // console.log(req.files)
        // console.log(req.files[0])
        // req.files.forEach(element => {
        //     console.log(element.filename)
        // });
    }

    const productoStoraged = productoNuevo.save();

    res.json(productoStoraged);
}

export default {
    getMethod,
    postMethod
}
import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/testing', {
    useNewUrlParser : true,
    useUnifiedTopology: true
})

const productoSchema = mongoose.Schema({
    nombre: String,
    precio: Number
})

const ProductoSchema = mongoose.model('test1', productoSchema);

ProductoSchema.find({}, (err, productos) => {
    if(err) return console.log(`Error en lectura de productos: ${err,message}`)
    console.log(productos)
});

const obtener = async ()=>{
    const productos = await ProductoSchema.find({});
    console.log(productos);
    return productos;
}

const obtenerOne = async (id)=>{
    const productos = await ProductoSchema.find({_id:id});
    console.log(productos);
    return productos;
}

const crear = async (datos)=> {
    const producto = new ProductoSchema(datos);
    await producto.save();

    let productos = await ProductoSchema.find({});
    let productoNuevo = productos[productos.length - 1];
    console.log(productoNuevo)
    return productoNuevo;

}

const borrar = async (id) =>{
    const producto = await ProductoSchema.findOne({_id:id});

    await ProductoSchema.findByIdAndDelete({_id:id});

    console.log(producto);

    return producto

}

const update = async (id, producto) =>{
   await ProductoSchema.updateOne({_id:id}, {$set: producto});
    let productoNuevo = await ProductoSchema.findOne({_id:id});
    console.log(productoNuevo);
    return productoNuevo;
}



export default {
    obtener,
    obtenerOne,
    crear,
    borrar,
    update
}
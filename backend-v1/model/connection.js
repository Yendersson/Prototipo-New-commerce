import mongoose from 'mongoose';
import config from '../config.js'
console.log('conectando a mongoose');

async function conexion(){
    try {
        console.log('conectando a base de datos...')
        await mongoose.connect(config.STR_CNX, {useNewUrlParser: true}, {useUnifiedTopology: true})
        console.log('base de datos conectada')
    } catch (error) {
        console.log('error en la conexion a la base de datos');
    }
} ;

export default conexion;


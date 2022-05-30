import express from "express";
import rutas from './rutas.js'

const app = express();

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res)=>{
    res.send('Hola mundo');
})

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.use('/api/productos', rutas);

const server = app.listen(8080, ()=>console.log('Servidor express escuchando'))
server.on('error', err=> console.log('Error en el servidor express', err.message))

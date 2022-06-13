import express from 'express';
import router from './routes/product.js';
import conexion from './model/connection.js';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// app.use('/public', express.static(`${__dirname}/storage/imgs`))

await conexion()

app.get('/', (req,res)=>{
    res.send('Api rest de New-Commerce');
})

app.use('/newcommerce/v1', router);

console.log(process.env)


const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, ()=>console.log('server listen on', PORT));
server.on('error', err=>{
    console.log(err.message)
})
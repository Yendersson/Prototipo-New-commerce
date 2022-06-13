import mongoose from 'mongoose';

const ProducSchema = mongoose.Schema({
    categoria: String,
    nombre: String,
    precio: Number,
    descripcion: String,
    imgUrl: Object,
    estado: Boolean,
    location: String,
    usuario: String
},
{
    timestamps:true
})

ProducSchema.methods.setImgUrl = function setImgUrl(filename){

    let urls = {}
    let url1, url2, url3, url4;

    for(let i = 0; i < filename.length; i++){

        console.log(filename[i].filename)

        if(i == 0){
            url1 = {url1:`http://localhost:8080/public/${filename[i].filename}`}
     
        }else if(i == 1){
            url2 = {url2: `http://localhost:8080/public/${filename[i].filename}`}


        }else if(i == 2){
        url3 = {url3:`http://localhost:8080/public/${filename[i].filename}`};

        }else if(i == 3){
        url4 = {url4:`http://localhost:8080/public/${filename[i].filename}`};

        }else{
            console.log(urls)
        }
        urls = {...url1, ...url2, ...url3, ...url4}
    }
    console.log(urls);
    this.imgUrl = urls

}

export default mongoose.model('productos', ProducSchema);
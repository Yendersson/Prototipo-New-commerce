import express from 'express';
const routerAuth = express.Router();
import User from '../model/user.js'


routerAuth.post('/register', async (req, res)=>{

    const isEmailExist = await User.findOne({ email: req.body.email });
    if (isEmailExist) {
        return res.status(400).json({error: 'Email ya registrado'})
    }

    const user = new User({
        name: req.body.name,
        email:req.body.email,
        password: req.body.password
    });

    try {
        const savedUser = await user.save();
        res.json({
        error: null,
        data: savedUser
    })
    } catch (error) {
        res.status(400).json({error})
    }
    
})

routerAuth.post('/login', async (req,res)=>{
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).json({error: 'Usuario no encontrado'});

    const validPassword = await User.findOne({password: req.body.password});
    if(!validPassword) return res.status(400).json({error: 'contraseña no valida'});

    res.json({
        error: null,
        data: 'inicio de sesion',
        usuario: user
    })
})

export default routerAuth
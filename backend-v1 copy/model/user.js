import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        require: true,
        min: 6,
        max: 1024
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    date:{
        type: Date,
        default: Date.now
    }

})

export default mongoose.model('User', userSchema);
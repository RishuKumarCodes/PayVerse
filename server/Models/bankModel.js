import mongoose from "mongoose";


const bankSchmea = new mongoose.Schema({

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },

    balance:{
        type:Number,
        required:true
    }
})

const Bank = mongoose.model('bank',bankSchmea);

export default Bank;
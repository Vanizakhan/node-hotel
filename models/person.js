import mongoose from 'mongoose'

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type:Number
    },
    work:{
        type: String,
        required: true,
        enum: ['chef', 'waiter', 'manager']
    },
    email:{
        type:String,
        required: true
    },
    salary:{
        type:Number,
        required: true
    },
    mobile:{
        type:String,
        required: true
    }

})

export const Individual = mongoose.model('person', personSchema)
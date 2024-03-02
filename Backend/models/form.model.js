import mongoose from "mongoose";

const formSchema = mongoose.Schema({
    userName: {
        type:String,
        required: true
    },
    formName: {
        type:String,
        required:true,
        unique:true
    },
    formHTML: {
        type:String,
        required:true
    }
})

export const Form = mongoose.model("Form",formSchema)
import mongoose from "mongoose";
import Mongoose ,{Schema,model } from "mongoose";
const userSchema = new schema ({
    userName:{
        type:String,
        required:true,
        min:4,
        max:20
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:Object,
    },
    phone:{
        type:String,
    },
    address:{
        type:String,
    },
    confirmEmail:{
        type:Boolean,
        default:false,
    },
    gender:{
        type:String,
        enum:['Male','Female'],
    },
    status:{
        type:String,
        default:'Active',
        enum:['Active','Inactive'],
    },
    role:{
        type:String,
        default:'User',
        enum:['User','Admin'],
    }

},
{timestamps:true,}
);

const userModel = mongoose.models.User || model('User',userSchema);
export default userModel;
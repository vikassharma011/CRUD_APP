import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please provide an string"],
        unique:[true,"name Exist"],
  },
  username:{
    type:String,
    required:[true,"please provide an string"],
    unique:[true,"username Exist"],
},
email:{
    type:String,
    required:[true,"please provide an string"],
    unique:[true,"Email Exist"],
},
phone:{
    type:String,
    required:[true,"please provide an string"],
    
}
});

const postUser = mongoose.model('user',userSchema);
export default postUser;
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    { 
        name: {
            type: String,
            require: [true, 'Name is required'],
            maxLength: [50, 'Name should be less than 50 character']
        },
        email: {
            type: String,
            unquie: true
        },
        password: {
            type: String,
            unquie: true
        },
        age: Number        
    }
    );


export default mongoose.model("User", userSchema)
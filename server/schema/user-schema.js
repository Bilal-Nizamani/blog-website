import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    cpassword:{
        type:String,
        required:true,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});


// hashing password
userSchema.pre('save', async function (next) {

    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }

    next();
})

// generating token
userSchema.methods.generateAuthToken = async function () {
    try {

        const token = jwt.sign({ _d: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        
        return token;

    } catch (err) {
        console.log(err);
    }
}


const User = mongoose.model('user', userSchema);

export default User;
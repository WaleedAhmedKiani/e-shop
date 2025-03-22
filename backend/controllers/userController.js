import userModel from "../models/userModel.js";
import validator from "validator";
import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)

}

// Route for user login
const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User doesn't exists" })

        }

        const isMatch = await bycrypt.compare(password, user.password);

        if (isMatch) {

            const token = createToken(user._id);
            res.json({ success: true, token })
        }

        else {
            res.json({ success: false, message: 'invalid credentials' })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}

// Route for user register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Chacking User Already Exists or Not
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User Email already exists" })
        }

        // Validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please Enter a valid email" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please Enter a strong password" })
        }

        // hashing user password
        const salt = await bycrypt.genSalt(12)
        const hashedPassword = await bycrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save();

        const token = createToken(user._id)
        res.json({ success: true, token })
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}

// Route for admin login
const adminLogin = async (req, res) => {
    try {
        const {email,password} = req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        } else {
            res.json({success:false,message:"Invalid Credentials"})
        }
           

    } 
    catch(error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }

}

export { loginUser, registerUser, adminLogin }
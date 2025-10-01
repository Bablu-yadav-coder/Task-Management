import User from "../Models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


// register new accout 


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export const register = async (req, res) => {


    try {

        console.log(req.body)

        const { name, email, password, role } = req.body;



        const user = await User.findOne({ email });

        if (user) return res.status(404).json({ message: "User already exists" });


        const hashedPass = await bcrypt.hash(password, 10)


        const newUser = new User({ name, email, password: hashedPass, role });



        const token = generateToken(newUser._id);

        newUser.token = token;

        await newUser.save();

        res.status(201).json({
            success: true,
            token,
            data: newUser,
        });



    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}




export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ message: "User not found" });


        const isMatch = await bcrypt.compare(password, user.password);


        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = generateToken(user._id);


        user.token = token;

        await user.save();


        res.status(200).json({
            success: true,
            token: generateToken(user._id),  // generate new token 
            user,
        });


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



export const getUser = async (req, res) => {

    try {

        const { token } = req.body;


        const user = await User.findOne({ token });

        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json({
            success: true,
            user,
        });



    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
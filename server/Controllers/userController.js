import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Models/userModel.js";
import Bank from "../Models/bankModel.js"
import { response } from "express";


const registerUser = async (req, res) => {


    try {

        const { firstName, lastName, email, password } = req.body;

        let exsitUser = await User.findOne({ email });


        if (exsitUser) return res.status(400).json({ message: "User already exist" });

        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName, lastName, email, password: hashedPassword
        })

        await newUser.save();


        const userId = newUser._id;

        const newBank = new Bank({
            userId,
            balance: 1 + Math.random() * 10000
        })

        await newBank.save();

        res.status(200).json({ message: "User registered succcessfully" })
    }
    catch (error) {
        console.error("Error while Regsitration", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}



const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ message: "Invalid email or password" });


        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });


        const token = jwt.sign({ userId: user._id, email }, process.env.JWT_SECRET);

        res.status(200).json({
            message: "login successfull",
            token: token
        })




    } catch (error) {
        console.log("Login error", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}



const getUser = async (req, res) => {

    const { userId } = req.user;

    if (!userId) return response.status(400).json({ message: "Can't fetch your details" })

    const user = await User.findById(userId);

    if (!user) return response.status(400).json({ message: "User not found" })

    res.status(200).json({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    });
}




const filterUser = async (req, res) => {
    try {
        const filter = req.query.filter || " ";


        const users = await User.find({
            $or: [
                { username: { $regex: filter, $options: "i" } },
                { lastname: { $regex: filter, $options: "i" } }
            ]
        });

        res.json({
            user: users.map(user => ({
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
            }))
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};


export { loginUser, registerUser, filterUser, getUser };
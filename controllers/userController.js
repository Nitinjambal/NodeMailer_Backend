// import sendMail from "../helpers/sendEmail.js";
import { user } from "../models/userModel.js";
import bcrypt from "bcrypt";


export const addNewUser = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const isEmail = await user.findOne({ email });
        if (isEmail) {
            return res.status(201).json({
                message: "User registerd successfully",
                newUser,
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await user.create({ email, password: hashedPassword, name });
        res.status(201).json({
            message: "User registerd successfully",
            newUser,
        })
    } catch (error) {
        console.log('error:', error)
        res.status(404).json({
            message: "Something went wrong",
            error,
        })
    }
}


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const emailPresent = await user.findOne({ email })
        console.log('emailPresent:', emailPresent)
        if (!emailPresent) {
            return res.status(400).json({
                message: "Invalid user or password",
            })
        }

        const passwordMatch = await bcrypt.compare(password, emailPresent.password);
        if (!passwordMatch) {
            return res.status(400).json({
                message: "Invalid user or password",
            })
        }

        return res.status(200).json({
            message: `Welcome back ${emailPresent.name}`,
            emailPresent,
        })

    } catch (error) {
        console.log('error:', error)
        return res.status(400).json({
            message: "something went wrong",
        })
    }

}



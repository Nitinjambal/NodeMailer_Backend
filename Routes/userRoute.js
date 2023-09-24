import express from "express";
import { addNewUser, loginUser } from "../controllers/userController.js";


const route = express.Router();


route.post("/register", addNewUser);
route.post("/login", loginUser);



export default route;



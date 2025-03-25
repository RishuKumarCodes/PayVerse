import {Router} from "express";
import { loginUser,registerUser,filterUser,getUser } from "../Controllers/userController.js";
import validate from "../Middlewares/validateUser.js";
import userSchema from "../Configs/zodSchema.js";
import verify from "../Middlewares/authUser.js";



const userRouter = Router();



userRouter.post('/login',loginUser);
userRouter.post('/register',validate(userSchema),registerUser);
userRouter.get('/filterUser',verify,filterUser);
userRouter.get('/getdetails',verify,getUser);

export default userRouter;
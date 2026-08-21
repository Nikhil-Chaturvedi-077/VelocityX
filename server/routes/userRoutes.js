import express from "express";
import { getCars, getUserData, loginUser, registerUser } from "../controllers/userController.js";
import { protect } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.get('/data', protect, getUserData);
userRouter.get('/cars',getCars);

export default userRouter;

// name : vickydon
// email:teating@gamil.com
// password : 12345678
// "eyJhbGciOiJIUzI1NiJ9.NjlmZDhiNDkwN2IyNTg0ZmFmZjg4Nzkz.NNZjZCpjalDSbPdOA1gKcjILxA73uCyAyxY5BqggGBg"
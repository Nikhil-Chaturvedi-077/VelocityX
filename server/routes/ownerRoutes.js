import express from "express";
import { protect, ownerProtect } from "../middleware/auth.js";
import { addCar, changeRoleToOwner, deleteCar, getDashBoardData, getOwnerCars, toggleCarAvailability, updateUserImage } from "../controllers/ownerController.js";
import  upload  from "../middleware/multer.js";

const ownerRouter = express.Router();

ownerRouter.post("/change-role", protect, changeRoleToOwner);
ownerRouter.post("/add-car", upload.single("image"), ownerProtect, addCar);
ownerRouter.get("/cars", ownerProtect, getOwnerCars);
ownerRouter.post("/toggle-car", ownerProtect, toggleCarAvailability);
ownerRouter.post("/delete-car", ownerProtect, deleteCar);

ownerRouter.get('/dashboard', ownerProtect, getDashBoardData);
ownerRouter.post('/update-image', upload.single("image"), ownerProtect, updateUserImage);

export default ownerRouter;
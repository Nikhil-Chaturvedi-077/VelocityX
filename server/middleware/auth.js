import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next)=>{
  const token = req.headers.authorization;
  if(!token)
  {
    return res.json({
      success:false,
      message:"not authorized"
    })
  }
  try {
    const userId = jwt.decode(token, process.env.JWT_SECRET);

    if(!userId)
    {
      return res.json({
        success:false,
        message:"not authorized"
      });
    }
    req.user = await User.findById(userId).select("-password");
    next();

  } catch (error) {
    return res.json({
      success:false,
      message:"not authorized"
    });
  }
}

export const ownerProtect = async (req, res, next) => {
  await protect(req, res, () => {
    if (req.user && req.user.role === 'owner') {
      next();
    } else {
      return res.json({
        success: false,
        message: "Unauthorized: Owner access required"
      });
    }
  });
}
import express from 'express'
import {getSuggestUsers, getUsersProfile, updateProfile} from "../controllers/userController.js";
import {protectRoute} from "../authMiddlewares/authMiddleware.js";

const userRouter = express.Router()

userRouter.get('/suggestions', protectRoute, getSuggestUsers)
                                            // getting profile-data of user
userRouter.get('/:username', protectRoute, getUsersProfile)

// changing profile
userRouter.put('/update-profile', protectRoute, updateProfile)

export default userRouter
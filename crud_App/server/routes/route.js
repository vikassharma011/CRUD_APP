import express from "express";
import mongoose from "mongoose";
import User from "../db/userModel.js"
//import User from "./db/userModel.js"; // Make sure to use the correct relative path
//const user = mongoose.model("USER")
const router = express.Router();


router.get('/', async (request, response) => {
    try{
        const users = await User.find();
        response.status(200).json(users);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
});
router.post('/add', async (request, response) => {
    const userData = request.body;

    try {
        const newUser = new User(userData);
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
});
// router.get('/:id', getUserById);
router.put('/:id', async (request, response) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            request.params.id,
            request.body,
            { new: true } // Return the updated document
        );

        if (!updatedUser) {
            return response.status(404).json({ message: 'User not found' });
        }

        response.status(200).json(updatedUser);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

 router.delete('/:id',  async (request, response) => {
    try{
        await User.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
});
export default router;

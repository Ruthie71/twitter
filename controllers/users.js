import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/User.js";
import Post from "../models/Post.js";
import ErrorResponse from "../utils/ErrorResponse.js";

export const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

export const getSingleUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) throw new ErrorResponse(`User with id of ${id} not found`, 404);
    res.status(200).json(user);
});

export const createUser = asyncHandler(async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email)
        throw new ErrorResponse("All fields are required", 400);
    const found = await User.find({ email });
    if (found) throw new ErrorResponse("Email already taken", 403);
    const newUser = await User.create({ name, email });
    res.status(201).json(newUser);
});

export const getPostsByUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) throw new ErrorResponse(`User with id of ${id} not found`, 404);
    const posts = await Post.find({ user: id });
    res.status(201).json({ user, posts });
});

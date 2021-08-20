import { Router } from "express";
import {
    createUser,
    getAllUsers,
    getSingleUser,
    getPostsByUser,
} from "../controllers/users.js";

const usersRouter = Router();

usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getSingleUser);
usersRouter.post("/", createUser);
usersRouter.get("/:id/posts", getPostsByUser);
// postsRouter.put('/:id', updatePost);
// postsRouter.delete('/:id', deletePost);

export default usersRouter;

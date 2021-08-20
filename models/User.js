import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

export default User;

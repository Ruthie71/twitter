import mongoose from "mongoose";
const { Schema, model } = mongoose;

const postSchema = Schema({
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Post = mongoose.model("Post", postSchema);

export default Post;

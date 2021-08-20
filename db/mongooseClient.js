import mongoose from "mongoose";

// IIFE   Immediatley invoked function expression
(async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connect to MongoDB @ ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
})();

// const mongoose = require('mongoose');

// const connectDb = async()=>{
//     await mongoose.connect(process.env.CONNECTION_STRING)
//     .then(()=>console.log("Database connected"))
// }

// module.exports = connectDb;
const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1);
    }
};

module.exports = connectDb;


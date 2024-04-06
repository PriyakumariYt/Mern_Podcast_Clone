const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection to the database successful");
    } catch (error) {
        console.error("Connection to the database failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDb;






import mongoose from "mongoose";
async function connect() {
    try {
        let connection = await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to database: ", connection.connection.name);
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}
export default connect
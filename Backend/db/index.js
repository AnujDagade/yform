import mongoose from 'mongoose';

const connectDB = async () => {
    let instance = null
    try {
        console.log(`${process.env.DB_URI}/${process.env.DB_NAME}`);
        instance = await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`);
        console.log("Database connection established");
        console.log(`HOST: ${instance.connection.host}`);
    } catch(err) {
        console.error(`Connection to database failed: ${err}`)
        process.exit(1)
    }

    return instance;
};

export default connectDB;
 
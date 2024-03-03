import mongoose from 'mongoose';

const connectDB = async () => {
    let instance = null
    try {
        const URI = `${process.env.DB_URI}/${process.env.DB_NAME}`

        
        instance = await mongoose.connect(URI,{
            useNewUrlParser: true,
        });
        
        console.log("Database connection established");
        console.log(`HOST: ${instance.connection.host}`);
        console.log(`DB: ${instance.connection.name}`);
    } catch(err) {
        console.error(`Connection to database failed: ${err}`)
        process.exit(1)
    }

    return instance;
};

export default connectDB;
 
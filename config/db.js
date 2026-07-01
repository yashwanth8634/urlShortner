import mongoose from 'mongoose'

const connectToDb = async () => {
    await mongoose.connect(
      process.env.MONGODB_URI,
    );
    console.log("MongoDb Connected");
}

export default connectToDb;
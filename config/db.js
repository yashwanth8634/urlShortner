import mongoose from 'mongoose'

const connectToDb = async () => {
    await mongoose.connect(
      "mongodb+srv://sriram8634_db_user:jUy7pxTdAgGEzBeg@cluster0.4pkize6.mongodb.net/urlshortner",
    );
    console.log("MongoDb Connected");
}

export default connectToDb;
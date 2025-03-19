import mongoose from "mongoose";

const connectDatabase = () => {
    const  MONGO_DB_URI =  process.env.MONGO_DB_URI

  mongoose
    .connect(MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

export default connectDatabase;
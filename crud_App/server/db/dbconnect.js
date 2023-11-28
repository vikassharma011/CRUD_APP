import mongoose from "mongoose";

const dbconnect = async()=>{
    mongoose.connect(
        "mongodb+srv://vikassharma9669:Lh05fuDA4P9ka01d@cluster0.ghhxfx0.mongodb.net/?retryWrites=true&w=majority" ,
        {
            //   these are options to ensure that the connection is done properly
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
          }
    )
    .then(() => {
        console.log("Successfully connected to MongoDB Atlas!");
      })
      .catch((error) => {
        console.log("Unable to connect to MongoDB Atlas!");
        console.error(error);
      });
}
export default dbconnect;
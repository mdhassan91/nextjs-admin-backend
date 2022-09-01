import mongoose from "mongoose";

// const Mongo_UrlOne = "mongodb://localhost:27017/next-admin-backend";
export const dbConnection = async () => {
  await mongoose
    .connect(process.env.DB_LOCAL_URL)
    .then(() => console.log("connected"))
    .catch((err) => console.log(err));
};

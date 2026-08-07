import mongoose from "mongoose";

interface ConnectDBParams {
    url: string;
}

interface ConnectDBResult {
    then: (onFulfilled: (value: any) => void) => any;
    catch: (onRejected: (reason: any) => void) => any;
}

const connectDB = (url: string): ConnectDBResult =>
{
    mongoose.set('strictQuery', true);
    return mongoose.connect(url)
    .then(()=>console.log("MongoDB connected"))
    .catch((err: Error)=>console.log(err));
}


export default connectDB;
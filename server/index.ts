import express from 'express';
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.ts'
import postRoutes from './routes/postRoutes.ts'
import midjourneyRoutes from './routes/midjourneyRoutes.ts'
dotenv.config();

const app=express()
app.use(cors())
app.use(express.json({limit:'50mb'}))

app.use('/api/v1/post',postRoutes)
app.use('/api/v1/midjourney',midjourneyRoutes)


app.get('/',async(req,res)=>{
    res.send('Hello from DALL-E!')
})

const startServer=async()=>{

try{
    connectDB(process.env.MONGODB_URL!)
    app.listen(8080,()=>console.log('Server has started on port http://localhost:8080'))
}catch(error){
    console.error('Error starting server:', error);
}


}
startServer()
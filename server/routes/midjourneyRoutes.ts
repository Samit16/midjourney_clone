import express from 'express';
import * as dotenv from 'dotenv'
import cors from 'cors'
import OpenAI from 'openai';
import Post from '../mongodb/models/post.ts'

dotenv.config();

const router=express.Router()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

router.route('/').get((req,res)=>{
    res.send('Hello from Midjourney!')
})
router.route('/').post(async (req,res)=>{
    try{
        const {prompt}=req.body

        const aiResponse=await openai.images.generate({
            model:'gpt-image-1',
            prompt:prompt,
            size:'1024x1024'
        })
        console.log('AI Response:', aiResponse);
        const image=aiResponse.data?.[0]?.b64_json
        res.status(200).json({photo:image})

    }catch(error){
        console.error('Error generating image:', error);
        res.status(500).json({message:'Failed to generate image'})
    }
})

export default router
import express from 'express';
import * as dotenv from 'dotenv'
import cors from 'cors'
import Post from '../mongodb/models/post.ts'

dotenv.config();

const router=express.Router()

router.route('/').get((req,res)=>{
    res.send('Hello from Midjourney!')
})
router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;

    res.status(200).json({
      photo: imageUrl,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to generate image",
    });
  }
});

export default router
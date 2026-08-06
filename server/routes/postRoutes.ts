import express from 'express';
import * as dotenv from 'dotenv'
import cors from 'cors'
import OpenAI from 'openai';
import Post from '../mongodb/models/post.ts'

dotenv.config();

const router=express.Router()


export default router
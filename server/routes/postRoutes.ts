import express from 'express';
import * as dotenv from 'dotenv'
import cors from 'cors'
import {InferenceClient} from "@huggingface/inference"
import Post from '../mongodb/models/post.ts'

dotenv.config();

const router=express.Router()


export default router
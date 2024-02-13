import { Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app=express();

mongoose.connect(process.env.URI);
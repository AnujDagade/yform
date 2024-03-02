import {app} from './app.js';
import connectDB from './db/index.js'
import dotenv from 'dotenv'
import { User } from './models/user.model.js';
dotenv.config()

const PORT = process.env.PORT || 8001

const dbConn = await connectDB();


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
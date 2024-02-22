import {app} from './app.js';
import connectDB from './db/index.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 8001

const dbConn = connectDB()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
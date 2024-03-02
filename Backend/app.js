import { log } from 'console';
import express from 'express';
import cors from 'cors'

export const app = express();

app.use(express.json());
app.use(cors())

// import routes
import formRoutes from './routes/form.routes.js';


//routes

app.use('/form', formRoutes);


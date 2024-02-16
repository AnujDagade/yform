import { log } from 'console';
import express from 'express';

export const app = express();

app.use(express.json());

// import routes
import formRoutes from './routes/form.routes.js';


//routes
app.use('/form', formRoutes);


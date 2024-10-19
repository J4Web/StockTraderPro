import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import useRoutes from './routes';

const app = express();

app.disable('x-powered-by');



const corsOption = {
  origin: "*",
  credentials: true,
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', useRoutes);

export default app;

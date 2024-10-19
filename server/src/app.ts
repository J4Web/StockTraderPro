import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import useRoutes from './routes';

const app = express();

app.disable('x-powered-by');

const corsOptions = {
  origin: 'https://stock-trader-pro.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', useRoutes);

export default app;
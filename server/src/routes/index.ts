import express from 'express';
import { Router } from 'express';
import authRoutes from './auth';
import profileRoutes from './stocks';
import pingRoute from './ping';
import cors from 'cors';

const app = express();
const router = Router();



app.use(cors({
    origin: 'https://stock-trader-pro.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));


router.use('/', pingRoute);

router.use('/', authRoutes);

router.use('/', profileRoutes);

app.use(router);

export default router;

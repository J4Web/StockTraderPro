import express from 'express';
import { Router } from 'express';
import authRoutes from './auth';
import profileRoutes from './stocks';
import pingRoute from './ping';
import cors from 'cors';

const app = express();
const router = Router();



app.use(cors({
    origin: '*'
}));


router.use('/', pingRoute);

router.use('/', authRoutes);

router.use('/', profileRoutes);

app.use(router);

export default router;

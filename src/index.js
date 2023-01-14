import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import CloudVisionRouter from './routes/CloudVisionRouter.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

// Helmet helps you secure your Express apps by setting various HTTP headers
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ messsage: 'Server is running' });
});

app.use('/api', CloudVisionRouter);

app.use(errorMiddleware);

export default app;

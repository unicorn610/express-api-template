import express from 'express';
import { testEnvironmentVariable } from '../settings';

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', (req, res, next) => {
  res.status(200).json({ message: testEnvironmentVariable });
});

export default indexRouter;

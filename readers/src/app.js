import express from 'express';
import { readerRouter } from './reader/router.js';

const app = express();

app.use('/reader', readerRouter)

export {
  app
}

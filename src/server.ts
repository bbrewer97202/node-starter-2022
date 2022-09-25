import express from 'express';
import morgan from 'morgan';
import { addTwoNumbers } from './component.js';

export const initializeServer = async () => {
  const PORT = process.env.PORT || 3000;
  const app = express();
  app.use(morgan('dev'));

  app.get('/', (req, res) => {
    res.status(200).send(`Add two numbers: ${addTwoNumbers(2, 3)}`);
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  return app;
};

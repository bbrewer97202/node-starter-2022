import dotenv from 'dotenv';
import { initializeServer } from './server.js';

dotenv.config();

try {
  initializeServer();
} catch (error) {
  // TODO
  console.log(error);
}


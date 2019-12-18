import express from 'express';
import Database from '../database';

const router = express.Router();

console.log(Database);
router.get('/database', (req, res) => {
  res.send({ status: Database.status });
});

export default router;

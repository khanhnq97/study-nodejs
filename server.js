import express from 'express';
import * as dotenv from 'dotenv';
import { usersRouter, studentsRouter } from './routes/index.js';
dotenv.config();
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use('/users', usersRouter);
app.use('/students', studentsRouter);

app.listen(port, async () => {
    console.log(`listening on port: ${port}`);
});


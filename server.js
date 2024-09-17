import express from 'express';
import * as dotenv from 'dotenv';
import { usersRouter, studentsRouter } from './routes/index.js';
import connect from './databases/database.js';
import morgan from 'morgan';
dotenv.config();

const app = express();
const port = process.env.PORT ?? 3000;
const uri = process.env.MONGO_URL;

app.use(morgan('dev'));
app.use(express.json());
app.use('/users', usersRouter);
app.use('/students', studentsRouter);

app.listen(port, async () => {
    await connect();
    console.log(`listening on port: ${port}`);
});


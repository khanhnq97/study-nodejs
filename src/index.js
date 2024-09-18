import * as dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// set app static
app.use(express.static(path.join(__dirname, 'public')));

// Thiết lập Handlebars làm view engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(morgan('dev'));
app.use(express.json());

// Route    
app.get('/', (req, res) => {
    res.render('home', { title: 'My Handlebars App' });
});

// Route    
app.get('/products', (req, res) => {
    res.render('products', { title: 'My Handlebars App' });
});

app.listen(port, async () => {
    console.log(`listening on port: ${port}`);
})
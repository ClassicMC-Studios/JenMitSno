import express from 'express';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.use(bodyParser.json());
app.use(express.static('public'));

let counter = 0;

app.get('/', (req, res) => {
    res.render('index.njk', { counter });
});

app.post('/increment', (req, res) => {
    counter++;
    res.json({ counter });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

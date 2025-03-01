import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))
let app = express();
let port = 3000;
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req, res) => {
    res.render('index.ejs');
    
})

app.post('/submit', (req, res) => {
    const nameLength = req.body['fName'].length + req.body['lName'].length;
    res.render('index.ejs', {numLetter: nameLength});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

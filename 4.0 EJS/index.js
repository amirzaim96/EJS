import express from 'express';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url))

let app = express();
let port = 3000;

app.get('/', (req,res) => {
    const d = new Date("2025-02-22T04:04:34.257Z");
    let dayType = d.getDay();
    let day = '';
    let adv = '';
    console.log(d);

    if (dayType === 1 || dayType === 6) {
        day = "It's the fakin weekend";
        adv = "Go enjoy";
    } else {
        day = "It's the fakin weekday";
        adv = "Go die";
    }

    res.render('index.ejs', {
        dday: day,
        dAdv: adv,
    });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
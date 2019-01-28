import express from 'express';
import {join} from 'path';
import bodyParser from 'body-parser';

const port = 3000;
const app = express();

app.set('json spaces', 2);

// expose public folder as static assets
app.use(express.static(join(__dirname, './client/public/assets')));
app.use(express.static(join(__dirname, '../dist')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req,res) =>{
	res.sendFile(join(__dirname+'/../dist/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
module.exports = app;
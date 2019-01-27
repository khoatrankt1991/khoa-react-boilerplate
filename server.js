const express = require('express');
const app = express();
const port = 8000;
app.use(express.static('dist'));
app.set('views', __dirname + '/dist'); // general config
app.set('view engine', 'ejs');

app.get('**', (req, res) => res.render('index'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
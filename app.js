const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');

const requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
}


app.use(requestTime);

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText);
});

app.get('/style', (req, res) => {
  res.render('style', { style: '.greetings { color: "red" }' });
});


app.get('/pug', (req, res) => {
  res.render('pug', { message: 'Hello from Pug!' });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
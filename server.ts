const express = require('express');
const fs = require('fs');
const jsonServer = require('json-server');
const middleware = require('./middleware.ts');
const dbData = require('./db.json');

const app = express();

const server = require('https').createServer(
  {
    key: fs.readFileSync('localhost-key.pem'),
    cert: fs.readFileSync('localhost.pem'),
  },
  app
);

const jsonMiddleware = jsonServer.defaults();
const jsonRouter = jsonServer.router('db.json');

app.use(middleware);
app.use(jsonMiddleware);

app.use((req, res, next) => {
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 7);

  res.cookie('fruits', JSON.stringify(dbData.fruits), {
    secure: true,
    expires: expiryDate,
  });
  next();
});

app.use(jsonRouter);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});

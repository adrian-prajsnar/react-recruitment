module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', 'https://localhost:8000');
  next();
};

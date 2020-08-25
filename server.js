const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({ extended: true }));

app.get('/', (req, res) => {
  res.send('API Running');
});

app.use('/auth', require('./routes/auth'));
app.use('/profile', require('./routes/profile'));
app.use('/listings', require('./routes/listings'));
app.use('/images', require('./routes/image'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

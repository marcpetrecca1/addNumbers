import express, { Application } from 'express';
import path from 'path';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.json());

app.get('/api/addNumbers', (req, res) => {
  const { number1, number2 } = req.query;
  const toNumber1: number = Number(number1);
  const toNumber2: number = Number(number2);
  if (typeof toNumber1 === 'number' && typeof toNumber2 === 'number') {
    const sum = (toNumber1 + toNumber2).toString();
    res.send(sum);
  } else {
    res.send(new Error('Numbers only!'));
  }
});

app.listen(PORT, () => {
  console.log('App running on port 3000');
});

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.send('Application is running');
});

app.listen(3333, () => console.log('Server in running on PORT 3333'));

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send({
    value: 'New Hello world'
  });
})

app.listen(port, () => {
  console.log(`Crypto parrot API listening at http://localhost:${port}`)
});


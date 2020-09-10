'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World 1');
});

app.listen(PORT);
console.log('hello-world');
console.log(`Running on port ${PORT}`);
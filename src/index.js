const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to node-aws-fake-service!!');
});

app.listen(3000, () => {
    console.log('node-aws-fake-service running at port: 3000');
});
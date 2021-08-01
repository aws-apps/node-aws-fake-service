const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to node-aws-fake-service!!');
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`node-aws-fake-service running at port: ${port}`);
});
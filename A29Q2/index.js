const express = require('express');

const { timeMethod, notFound, logErrors } = require('./middlewares/middleware');

const app = express();
const port = Math.floor(2000 + Math.random() * 1000);

app.use(timeMethod);

app.use('/', require('./routes'));

app.use(notFound);
app.use(logErrors);

app.listen(port, () => {
    console.log(`App running on port: http://localhost:${port}`);
});
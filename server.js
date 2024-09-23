const express = require('express');

const mongodb = require('./data/database');

const app = express();

const port = process.env.PORT || 3000;

router.use('/', require('./users'));

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {console.log(`Database is running and node Running on port ${port}`)});
    }
});


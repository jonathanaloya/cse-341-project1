const express = require('express');
const dotenv = require('dotenv');
const mongodb = require('./data/database');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

const router = express.Router();

router.use('/', require('./routes/users'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {console.log(`Database is running and Node is running on port ${port}`)});
    }
});

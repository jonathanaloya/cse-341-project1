const express = require('express');
const dotenv = require('dotenv');
const mongodb = require('./data/database');
const bodyParser = require('body-parser')
dotenv.config();

const app = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-control-allow-origin', '*');
    res.setHeader (
        'Access-Control-Allow-Header',
        'Origin, X-Requested-width, Content-Type, Accept, Z-key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

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

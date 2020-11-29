/*
 * Template and Project made by JS
 */
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express();

const exampleRoute = require('./routes/example');
const port = 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api', [exampleRoute]);
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
});

app.listen(port, () => {
    console.log(`App online - Now listening on port ${port}`);
})

module.exports = app;

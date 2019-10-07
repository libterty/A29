const timeMethod = (req, res, next) => {
    const currentTime = new Date();
    req.requestTime = currentTime;
    next();
}

/** Not found err handler */
const notFound = (req, res, next) => {
    const error = new Error('404, Page not found.');
    error.status = 404;
    next(error);
}

/** default err handler */
const logErrors = (error, req, res) => {
    res.status(error.status || 500);
    res.send(error.message);
}

module.exports = { timeMethod, notFound, logErrors };
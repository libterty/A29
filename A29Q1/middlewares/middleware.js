const timeMethod = (req, res, next) => {
    const currentTime = new Date();
    const date = `${currentTime.getFullYear()}-${currentTime.getMonth() + 1}-${currentTime.getDate()}`;
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    console.log(`${date} ${time} | ${req.method} from ${req.url}`);
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
function getCurrentTime(currentTime) {
    const date = `${currentTime.getFullYear()}-${currentTime.getMonth() + 1}-${currentTime.getDate()}`;
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    return `${date} ${time}`;
}

function getTimeDifference(reqTime, resTime) {
    return resTime.getMilliseconds() - reqTime.getMilliseconds();
}

module.exports = (requestTime, method, url) => {
    return `${getCurrentTime(requestTime)} | ${method} from ${url} | total time: ${getTimeDifference(requestTime, new Date())}ms`;
}
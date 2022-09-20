// 封装loading效果
const ora = require('ora');
const waitFnloading = (fn, message) => async (...args) => {
    const spinner = ora(message);
    spinner.start();
    const result = await fn(...args);
    spinner.succeed();
    return result;
};
module.exports = waitFnloading
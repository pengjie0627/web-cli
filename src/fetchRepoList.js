// 1.获取项目列表
const axios = require('axios');
const {gitUser} = require('./constants')
const fetchRepoList = async () => {
    const {
        data,
    } = await axios.get(`https://api.github.com/users/${gitUser}/repos`);
    return data;
};
module.exports = fetchRepoList
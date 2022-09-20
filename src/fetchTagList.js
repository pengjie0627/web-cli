// 抓取一个项目的tag列表
const axios = require('axios');
const {gitUser} = require('./constants')
const fetchTagList = async (repo) => {
    console.log(repo);
    const {
        data,
    } = await axios.get(`https://api.github.com/repos/${gitUser}/${repo}/tags`);
    return data;
};
module.exports = fetchTagList
let downloadGitRepo = require('download-git-repo');
const {gitUser} = require('./constants')
const {promisify} = require('util');
const { downloadDirectory } = require('./constants');
downloadGitRepo = promisify(downloadGitRepo);
const download = async (repo, tag) => {
    let api = `${gitUser}/${repo}`;
    if (tag) {
        api += `#${tag}`;
    }
    const dest = `${downloadDirectory}/${repo}`;
    await downloadGitRepo(api, dest);
    return dest;
};
module.exports = download
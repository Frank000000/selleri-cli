const axios = require('../api.request');

const getRepoList = params => {
    return axios.request({
        url: 'https://api.github.com/users/Frank000000/repos',
        params,
        method: 'get'
    })
}

module.exports = {
    getRepoList
}
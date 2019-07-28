const md5 = require('md5');
const fetch = require('node-fetch');

getInfoGravatar = async function (email) {
    const emailHash = md5(email.trim().toLowerCase());
    const url = `http://www.gravatar.com/${emailHash}.json`;
    const response = await fetch(url);

    if (response.ok){
        return response.json();
    }

    return response.statusText;
}

module.exports = {getInfoGravatar};
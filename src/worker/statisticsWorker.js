
const { Worker, MessageChannel } = require("worker_threads");
const path = require('path');
const fs = require('fs');
const postsFile = path.join(__dirname, '../../data/posts.json');
const postsData = JSON.parse(fs.readFileSync(postsFile, 'utf8'));
const cron = require('../utils/cron.js');

module.exports = () => {
    cron(function() {         
        const worker = new Worker(`${__dirname}/../utils/worker.js`, {workerData: postsData});

        worker.on("message", msg => {
        global.statistics = msg;
        });
    },)
}
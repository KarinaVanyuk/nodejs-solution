const { CronJob } = require('cron');

module.exports = (worker) => {
    try {
        const cronJob = new CronJob('* * * * * *', worker);
        cronJob.start();
    } catch (error) {
        console.log(`${error}`);
    }
}
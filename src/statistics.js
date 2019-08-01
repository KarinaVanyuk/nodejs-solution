const fs = require('fs');
const parse = require('async-json-parse');
const fileContents = fs.readFileSync('./data/posts.json', 'utf8')
const posts = parse(fileContents);

const statisticsPosts = (posts) => {
    let postsPerDay = 0;
    let postsPerWeek = 0;
    let postsPerMonth = 0;

    const date = Date.now();

    for (let i = 0; i < posts.length; i++) {
        const days = Math.abs(date - Date.parse(posts[i].createdAt) )/ (1000*60*60*24);
        if (days <= 1) {
            postsPerDay++;
          } 
        else if (days <= 7) {
            postsPerWeek++;
          }
        else if (days <= 30) {
            postsPerMonth++;
          }
    }

    return {
        postsPerDay, postsPerWeek, postsPerMonth
    }
}

console.log(statisticsPosts(posts))
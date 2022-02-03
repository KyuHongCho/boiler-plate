// if it is on production (post-deployment), export 'prod.js'; if it is on local developement, export 'dev.js' 
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}
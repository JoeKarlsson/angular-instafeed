const instafeed = require('angular-instafeed');
const config = require('./config.json');
const client_id = config.client_id;
const user_id = config.user_id;

instafeed(client_id, user_id);
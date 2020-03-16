const mongoose = require('mongoose');
const mongoDB = 'mongodb://emon:emon@64.227.73.211:27017/emon?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false';

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

module.exports = mongoose;

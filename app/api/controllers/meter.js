const meterModel = require('../models/meter');

module.exports = {
    getLatest: function(req, res, next) {
        var query = meterModel.findOne().sort({ _id: -1 }).limit(1);
        query.exec((err, meter) => {
            if(err){
                next(err);
            } else {
                console.log(new Date(meter.datetime).toISOString());
                res.json({status: "success", message: "Found meting", data: {meting: meter}});
            }
        })
    },
    getParam: function(req, res, next) {

        var query = meterModel.find({
            datetime: {
                // '$gte': new Date('2020-03-16T11:30:00Z'),
                // '$lte': new Date('2020-03-16T12:30:00Z')
                '$gte': new Date(req.query.rangeFrom),
                '$lte': new Date(req.query.rangeTo)
            }
        }).limit(Number(req.query.limit));

        query.exec((err, meter) => {
            if(err){
                next(err);
            } else {
                res.json({status: "success", message: "Found meting", data: {meting: meter}});
            }
        })
    }
};

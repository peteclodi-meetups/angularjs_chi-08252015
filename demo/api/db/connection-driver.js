var MongoClient = require('mongodb').MongoClient;
var CollectionDriver = require('./collection-driver');

var url = 'mongodb://localhost:27017/ng08252015';

function ConnectionDriver() {
    this.connect = function(callback) {
        var self = this;
        MongoClient.connect(url, function (err, db) {
            if (err) {
                process.exit(1);
            }
            self.collectionDriver = new CollectionDriver(db);
            callback();
        });
    };

    this.disconnect = function() {
        this.db.close();
    };
}


module.exports = ConnectionDriver;
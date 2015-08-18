var ObjectId = require('mongodb').ObjectID;

CollectionDriver = function (db) {
    this.db = db;
};

CollectionDriver.prototype.getCollection = function (collectionName, callback) {
    callback(this.db.collection(collectionName));
};

CollectionDriver.prototype.findAll = function (collectionName, callback) {
    var collection = this.db.collection(collectionName);
    collection.find({}).toArray(function(err, collectionData) {
        if(err) {
            callback(null, err);
            return;
        }
        callback(collectionData);
    });
};

CollectionDriver.prototype.get = function (collectionName, id, callback) { //A
    var collection = this.db.collection(collectionName);
    collection.findOne({_id: new ObjectId(id)}, function(err, doc) {
        if(err) {
            callback(null, err);
            return;
        }
        callback(doc);
    });/var/www/meetups/angularjs_chi-08252015
};

//save new object
CollectionDriver.prototype.save = function (collectionName, obj, callback) {
    var collection = this.db.collection(collectionName);
    collection.insertOne(obj, function(err, result) {
        if(err) {
            callback(err);
            return;
        }
        callback();
    });
};

//update a specific object
CollectionDriver.prototype.update = function (collectionName, id, newData, callback) {
    var collection = this.db.collection(collectionName);
    delete newData._id;
    collection.findOneAndUpdate({_id: new ObjectId(id)}, { $set: newData }, { returnOriginal: false }, function(err, result) {
        if(err) {
            callback(null, err);
            return;
        }
        callback(result.value);
    });
};

//delete a specific object
CollectionDriver.prototype.delete = function (collectionName, entityId, callback) {
    var collection = this.db.collection(collectionName);
    collection.findOneAndDelete({_id: new ObjectId(entityId)}, function(err, result) {
        if(err) {
            callback(null, err);
            return;
        }
        callback(result.value);
    });
};

module.exports = CollectionDriver;
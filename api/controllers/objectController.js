var mongoose = require('mongoose'),
  Object = mongoose.model('Objects');

exports.getAll = function(req, res) {
  Object.find({}, function(err, object) {
    if (err)
      res.send(err);
    res.json(object);
  });
};

exports.add = function(req, res) {
  var new_object = new Object(req.body);
  new_object.save(function(err, object) {
    if (err)
      res.send(err);
    res.json(object);
  });
};

exports.get = function(req, res) {
  Object.findById(req.params.objectId, function(err, object) {
    if (err)
      res.send(err);
    res.json(object);
  });
};


exports.update = function(req, res) {
  Object.findOneAndUpdate({_id: req.params.objectId}, req.body, {new: true}, function(err, object) {
    if (err)
      res.send(err);
    res.json(object);
  });
};


exports.remove = function(req, res) {
  Object.remove({
    _id: req.params.objectId
  }, function(err, object) {
    if (err)
      res.send(err);
    res.json({ message: 'Object successfully deleted' });
  });
};



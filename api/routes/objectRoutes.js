module.exports = function(app) {
    var object = require('../controllers/objectController');
  
    // todoList Routes
    app.route('/objects')
      .get(object.getAll)
      .post(object.add);
  
  
    app.route('/objects/:objectId')
      .get(object.get)
      .put(object.update)
      .delete(object.remove);
  };
  
  
const mongoose = require('mongoose');
module.exports = () => {
    mongoose.set('strictQuery', false);
    function connect() {
      mongoose.connect('mongodb://127.0.0.1:27017');

    }
    connect();
    
    // mongoose.connection.on('disconnected', connect);
  };
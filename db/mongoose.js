const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb+srv://advan:efgh@cluster0.zdgse.mongodb.net/cyber', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected successfully to mongo');
  })
  .catch((e) => {
    console.log('error while connecting to mongoDB');
    console.log(e);
  });

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', true);

module.exports = {
  mongoose,
};

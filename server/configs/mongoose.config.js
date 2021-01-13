const { DB } = require('./env.config');
const mongoose = require('mongoose');

mongoose.connect(
  DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  (err) => {
    if (err) throw err;

    console.log('DATABASE STATUS ........ CONNECTED');
  }
)

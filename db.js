const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lab7', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
    console.log("base de datos conectada");
}).catch((e)=>{
    console.log("no conecto",e);
});
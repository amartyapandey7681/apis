let router = require('express');
let app = router();
let rout = require('./router');
let mongoose = require('mongoose');

app.use(router.json());
app.use(router.urlencoded({ extended: true }));


app.use('/initial',rout);



mongoose.connect("mongodb://127.0.0.1:27017/test?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0", { useNewUrlParser: true, useUnifiedTopology: false, driverInfo: { platform: 'disease-platform' }}).then(result => {

    app.listen(5000, () => {
        console.log("Server Running on Port>> ",5000)

    });

}).catch(err => console.log(err));
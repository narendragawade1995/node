const express = require('./express');
const path = require('path');
const app = express();
const userRoutes = require('./routes/router');

const bodyParse = require('body-parser');

app.use(express.static(path.join(__dirname,'assets')));


app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParse.urlencoded({extended:false}));
app.use(userRoutes);
app.listen(4000);
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const signupRoutes = require("./routes/route");

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

app.use(signupRoutes);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(4000);
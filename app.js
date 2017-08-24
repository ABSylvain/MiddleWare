let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let auth = require('http-auth');
let basic = auth.basic({
    realm: "Secret Simplon",
    file: __dirname + "/.htpasswd"
});

app.use(express.static("static"));
app.use("/private", auth.connect(basic));

app.post("/auth",
    bodyParser.urlencoded({ extended: true }),
    function(req, res) {
        console.log(req.user);
        res.send('Succes');
    });

app.listen(9000, function(err) {
    if (err) {
        console.log('Probleme :' + err);
    }
    console.log('yo');
});
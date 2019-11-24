let express = require("express");
let bodyParser = require("body-parser");
//set up port for listening on designated port or 3000
let PORT = process.env.PORT||3000;
// express app
let app = express();
//express router
let jsonParser=bodyParser.json ();
let urlencodedParser = bodyParser.urlencoded ({extended:false});
let router = express.Router();

//parse into json, strings and buffer
app.use(bodyParser.json({type: "application/*+json"}));
app.use(bodyParser.raw({type: "application/vnd.custom-type"}));
app.use(bodyParser.text({type: "text.html"}));

//have everything go through middleware
app.use(router);
require("./app/routing/htmlRoutes.js")(app);
//tell us what port app is listening at
app.listen(PORT,function(){
    console.log("Listening on port:" + PORT);
});


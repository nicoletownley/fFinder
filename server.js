let express = require("express");
//when the user sends in server information allows extraction of information without muffling
let bodyParser = require("body-parser");
let router =express.Router();
//html routes User will see when they navigate to site
let staticRoutes = require("./app/routing/htmlRoutes.js");

console.log (staticRoutes);
//set up port for listening on designated port or 3000
let PORT = process.env.PORT||8080;
// express app
let app = express();
//express router
// let jsonParser = bodyParser.json ();
let urlencodedParser = bodyParser.urlencoded ({extended:false});

//creating an express router

//parse into json, strings and buffer from the front end
app.use(bodyParser.json());
// app.use(bodyParser.raw({type: "application/vnd.custom-type"}));
// app.use(bodyParser.text({type: "text.html"}));

//have everything go through middleware
app.use(router);
staticRoutes (app);

 require("./app/routing/htmlRoutes")(app);
 require("./app/routing/apiRoutes")(app);


//tell us what port app is listening at
app.listen(PORT,function(){
    console.log("Listening on port:" + PORT);
});


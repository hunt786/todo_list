const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
var items=["buy food","cook food"];
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month:"long",
    }
    var day = today.toLocaleDateString("hi-IN", options);
     res.render("list", {kindofday:day,newListItem:items});
    
});
app.post("/",function (req,res) {
      var item = req.body.input;
    items.push(item);
    res.redirect("/");
    
})
app.get("/about",function (req,res) {
    res.render("about");
})
app.listen(4000, function () {
    console.log("server is running at port 4000");
    var today = new Date();
    console.log(today.getDay());
    console.log(__dirname);

});

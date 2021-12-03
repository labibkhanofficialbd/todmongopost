const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://admin:70Ib272whsWD2sMC@cluster0.vfdkq.mongodb.net", { userNewUrlParser: true }, { useUnifiedTopology: true })

//Create a data schema

const noteSchema = {
    t:{
        type:[String]
      },
      d:{
        type:[String]
      },
      tb:{
        type:[String]
      },
      db:{
        type:[String]
      }
}

const Note = mongoose.model("Note", noteSchema)

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    let newNote = new Note({
        t: req.body.t,
        type: req.body.content
    });
    newNote.save();
    res.redirect("/");
})

app.listen(3000, function(){
    console.log("server is running on 3000");
})
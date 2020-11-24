const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Visitor = require("./models/model")

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/mongo-1', { useNewUrlParser: true });
app.use(express.urlencoded({ extended: true }))

app.get("/", async (req, res) =>{
    const visitor = new Visitor({name: req.query.name || "Anónimo"});
    await visitor.save();
    res.send(`<h1>El visitante fue almacenado con éxito</h1>`)
});

app.listen(3000, ()=> console.log("Listening on port 3000"))
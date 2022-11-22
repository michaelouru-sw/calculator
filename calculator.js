const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
    var result = parseInt(req.body.num1) + parseInt(req.body.num2);
    res.send("The result of your calculation is: " + result);
});

app.post("/bmicalculator", function (req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = Math.ceil(weight / (height * height));
    res.send("Your BMI is " + bmi);
});

app.listen(3000, function () {
    console.log("Server running on port 3000");
});
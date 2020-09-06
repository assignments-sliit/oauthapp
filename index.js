const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const GoogleStratergy = require('passport-google-oauth20').Strategy;
const FacebookStratergy = require('passport-facebook').Strategy;
const jwt = require('jsonwebtoken')

const app = express();
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(cookieParser())
app.use(passport.initialize());



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));


app.get("/", (req, res) => {
  res.send({
      "message":"Welcome to Auth App"
  })
});

app.get("/:name", (req, res) => {
  res.send({
      "message":"Hello " + req.params.name
  })
});


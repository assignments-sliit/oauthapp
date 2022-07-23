const express = require("express");
const app = express();
const passport = require("passport");
const nunjucks = require("nunjucks");
const cookieSession = require("cookie-session");
const keys = require("./keys.json");
const fileuppload = require("express-fileupload");
const homeRouter = require("./routes/dashboard");
const authRouter = require("./routes/authentication");

app.use("/static", express.static("public"));

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use(
  cookieSession({
    keys: [keys.session_key],
  })
);

//passport

app.use(passport.initialize());
app.use(passport.session());

//upload
app.use(fileuppload());

//routes
app.use("/", homeRouter);
app.use("/authenticate", authRouter);

//general app stuff
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));

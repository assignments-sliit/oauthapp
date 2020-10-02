const { Router } = require("express");
const passport = require("passport");
const { google } = require("googleapis");
const keys = require("../keys.json");

const router = Router();

router.get('/', (req, res) => {
  res.render("home.html", {
    title: "Welcome to Upload Center",
  });
});

router.get('/dashboard', (req, res) => {
  if (typeof req.user == "undefined") res.redirect("/authenticate/login/google");
  else {
    const data = {
      title: "Dashboard",
      googleid: req.user._id,
      name: req.user.name,
      avatar: req.user.pic_url,
      email: req.user.email,
    };

    if (req.query.file !== undefined) {
      if (req.query.file == "upload") data.file = "uploaded";
      else if (req.query.file == "notupload") data.file = "notuploaded";
    }

    res.render('dashboard.html', data);
  }
});

router.post("/upload", (req, res) => {
  if (!req.user) res.redirect("authenticate/login/google");
  else {
    const oauth2Client = new google.auth.OAuth2();

    console.log("USER ==========================");
    console.log(req.user);
    oauth2Client.setCredentials({
      access_token: req.user.accesstoken,
    });

    const drive = google.drive({
      version: "v3",
      auth: oauth2Client,
    });

    let { name: filename, mimetype, data } = req.files.file_upload;

    const gDriveResponse = drive.files.create({
      requestBody: {
        name: filename,
        mimeType: mimetype,
      },
      media: {
        mimeType: mimetype,
        body: Buffer.from(data).toString(),
      },
    });

    gDriveResponse
      .then((data) => {
        if (data.status == 200) res.redirect('/dashboard?file=upload');
        else res.redirect('/dashboard?file=notuploaded');
      })
      .catch((err) => {
        throw new Error(err);
      });
  }
});

module.exports = router;

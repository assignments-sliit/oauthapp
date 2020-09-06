const { Router } = require("express");

const passport = require("passport");

const router = Router();

router.get('/login', (req, res) => {
  if (req.user) res.redirect('/dashboard');
  else res.redirect('/authenticate/login/google');
});

router.get(
  '/login/google',
  passport.authenticate('google', {
    scope: ['profile', "https://www.googleapis.com/auth/drive.file", "email"]
    // accessType: 'offline',
    // prompt: 'consent',
  })
);

//token callback from google
router.get(
  '/google/redirect',
  passport.authenticate('google'), function (req, res) {
    console.log(res);
    res.redirect('/dashboard');
  });

//logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;

//Configuration
const passport = require("passport");
const GoogleStratergy = require("passport-google-oauth20");
const keys = require("../keys.json");


passport.serializeUser((user, done) => {
  const sessionUser = {
    _id: user.googleId,
    accesstoken: user.accesstoken,
    name: user.name,
    pic_url: user.pic_url,
    email: user.email,
  };

  done(null, sessionUser);
});

passport.deserializeUser((sessionUser, done) => {
  done(null, sessionUser);
});

passport.use(
  new GoogleStratergy(
    {
      clientID: keys.web.client_id,
      clientSecret: keys.web.client_secret,
      callbackURL: keys.web.redirect_uris[0],
      passReqToCallback: true
    },
    (request, accesstoken, refreshToken, profile, done) => {
      user = {
        "accesstoken": accesstoken,
        "googleId": profile.id,
        "name": profile.displayName,
        "pic_url": profile._json.picture,
        "email": profile._json.email,
      };

      done(null, user);
    }
  )
);
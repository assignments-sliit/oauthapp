//Configuration
const passport = require('passport')
const GoogleStratergy = require('passport-google-oauth20').Strategy;
const envJson = require('../env.json')
const keys = require('../keys.json')

passport.use(new GoogleStratergy({
    clientID:keys.web.client_id,
    clientSecret:keys.web.client_secret,
    callbackURL:envJson.env.hostname
}))
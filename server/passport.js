const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');


const GOOGLE_CLIENT_ID = "947158986818-dal3sfpfuv18hhnp5hl1665qq6upa2u1.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)

    // const user = {
    //     username: profile.displayName,
    //     avatar: profile.photos[0]
    // };
  }
));

passport.serializeUser((user, done) => {
  done(null, user)  
})

passport.deserializeUser((user, done) => {
    done(null, user)  
  })
const passport = require('passport');
const GoogleStrat = require('passport-google-oauth20');

passport.use(
    new GoogleStrat({
        clientID:'1062303021934-atnl8tiq12bc5uu55ea2ri668ei1pjko.apps.googleusercontent.com',
        clientSecret:'MzQKM7l8M9jo4ZD3UnFIqWk0'
    }), () => {
        
    }
)
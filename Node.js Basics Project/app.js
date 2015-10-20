//require the profile.js file
//.js at end here is optional, but the path ("./") is not optional!
var profile = require("./profile.js");

//grab users that were entered when the application was run [e.g., node app.js user1 user2] and then assign those to the users variable
var users = process.argv.slice(2);

//run method to look up username
users.forEach(profile.get);

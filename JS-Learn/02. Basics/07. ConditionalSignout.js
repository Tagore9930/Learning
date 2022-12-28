/**
 * Show user a signout button if he is authenticated,
 * other wise show him option to login/Signup
 */

var authenticated = true;

if (authenticated) {
   console.log("Show signout option.");
} else {
   console.log("Show login option.");
}
//          OR

authenticated ? console.log("Show signout option.") : console.log("Show login option.");
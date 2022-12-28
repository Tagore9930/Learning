/**
 * Allow user to access course if is:
 *  logged in from email.
 * logged in from Google.
 * logged in from Facebook.
 */
var email = true;
var google = false;
var facebook = false;

if (email || google || facebook) {
   console.log("Logged Success.");
} else {
   console.log("Logged Failed.");
}
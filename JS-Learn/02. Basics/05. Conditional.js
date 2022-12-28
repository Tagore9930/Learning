/**
 * User is only allowed to make a purschase when he is:
 * logged in.
 * email Verified.
 * cardInfo - valid.
 * If any one missing, stop purchase.
 */
var isLoggedIn = true;
var isEmailVerified = true;
var isCardInfo = true;

if (isLoggedIn) {
  console.log("Logged in Success.");
  if (isEmailVerified) {
    console.log("Email Verified.");
    if (isCardInfo) {
      console.log("You can make a purchase.");
    }
  }
}
//            OR

if (isLoggedIn && isEmailVerified && isCardInfo) {
  console.log("You can make a purchase.");
}else{
  console.log("Your are allowed to do that.");
}
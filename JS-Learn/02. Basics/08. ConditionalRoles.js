/**
 * Create an application with following roles:
 * admin - gets full acccess
 * subadmin  - gets access to create/delete courses
 * testprep - gets access to create/delete tests
 * User - gets access to consume content
 */
var user = "testprep";

switch (user) {
  case "admin":
    console.log("you get full access.");
    break;
  case "subadmin":
    console.log("Gets access to create/Delete courses.");
    break;
  case "testprep":
    console.log("Gets access to create/delete tests.");
    break;
  case "user":
    console.log("gets access to consume content.");
    break;
  default:
    console.log("Trial user");
    break;
}

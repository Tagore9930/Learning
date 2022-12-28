/**
 * Define a function that can answer the role of a user.
 * A user can be on following roles:
 * admin - witjh all acccess
 * subadmin  - with access to create/delete courses
 * testprep - with access to create/delete tests
 * User - access to consume content
 * Other - trial user.
 *
 * Input: getUserRole(name, role);
 */

function getUserRole(name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all access.`
       break; // This is not necessary 
    case "subadmin":
      return `${name} is sub-admin with acces to create and delete courses`
      break;
    case "testprep":
      return `${name} is testprep with access to create and delete tests`
      break;
    case "user":
      return `${name} is a user to consume content.`
      break;

    default:
      return `${name} is a Trial user.`
      break;
  }
}
console.log(`\n${getUserRole("Tagore", "admin")}\n`);

var getRoll = getUserRole("Jithendra", "subadmin");

console.log(`\n${getRoll}\n`);
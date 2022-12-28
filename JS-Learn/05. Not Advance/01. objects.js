
   // any variable create language convert to prototype variable.

var User = function (firstName, courseCount) {
   this.firstName = firstName;
   this.courseCount = courseCount;
   this.getCourseCount = function () {
      console.log(`Course count is :- ${this.courseCount}`);
   }  
}

User.prototype.getFirstName = function () {
   console.log(`FirstName is :- ${this.firstName}`);
}

var tagore = new User("tagore", 1);
tagore.getCourseCount();
console.log(tagore);

if (tagore.hasOwnProperty("firstName")) {
   tagore.getFirstName();
}  
// var keshava = new User("keshava", 2);

// console.log(keshava);
// console.log(tagore);
console.log(this);

var user = {
   name : "tagore",
   courseCount : 4,
   getCourseCount : function () {
      console.log("Line number :- 7 " , this);
      function regular() {
         console.log("helloooooooooooooooooooooooooooooo");
         console.log("Line number :- 10 " , this);
      }
      regular();
   }
}

console.log(user.getCourseCount());
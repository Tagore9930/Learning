
   // Create a Normal object

var user = {
   Name : "",
   age : "",
   getdetials : function () {
      console.log(`Your name :- ${this.Name}\nYour age :- ${this.age}`);
   }
}

// Convert Normal object to ProtoType object.

var newUser = Object.create(user);


console.log(newUser);

// copy 4 line to 16 line code and go to chrome open inspect and paste press enter check all output.
user.Name = "Tagore";
user.age = 17;


newUser.getdetials();
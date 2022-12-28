const user1 = {
   firstName : "Banda",
   lastName : "Tagore",
   class : "Seven",
   gender : "Male",
   user1Info : function () {
      console.log(`
      FirstName is :- ${this.firstName}
      LastName is :- ${this.lastName}
      Your class is :- ${this.class}
      Your gender is :- ${this.gender}
      `);
   }
};

const user2 = {
   firstName : "Banda",
   lastName : "Jithendra",
   class : "BTECH First Year",
   gender : "Male"
}

const user3 = {
   firstName : "Banda",
   lastName : "Keshava",
   class : "Degree Complete",
   gender : "Male"
}

user1.user1Info();

// user2.userInfo();
user1.user1Info.bind(user2);   //---------- bind only copyed data.
var user2Info = user1.user1Info.bind(user2);

user2Info();

user1.user1Info.call(user3);
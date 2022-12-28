const courses = [
   {
      Name : "JAVA Course",
      price : "10.12"
   },
   {
      Name : "HTML Course",
      price : "2.5"
   },
   {
      Name : "CSS Course",
      price : "2.4"
   },
   {
      Name : "Bootstrap Course",
      price : "2.0"
   },
   {
      Name : "JavaScript Course",
      price : "5.3"
   },
];

function generateList() {

   let ul = document.querySelector(".list-group");
   courses.forEach( (course) => {

      const li = document.createElement("li");
      li.classList.add("list-group-item");

      const name = document.createTextNode(course.Name);
      li.appendChild(name);

      const span = document.createElement("span");
      span.classList.add("float-right");
      
      const price = document.createTextNode("$ " + course.price);
      span.appendChild(price);

      li.appendChild(span);
      ul.appendChild(li);
   });
}

generateList();
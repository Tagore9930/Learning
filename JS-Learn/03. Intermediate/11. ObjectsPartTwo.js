var user = {
   customerName : "Keshava",
   connections : [],
   totalConnections : "",
   sim : false,
   simNumber : "",
   boardbrand : false,
   landLine : false,
   landLineNumber : "",
   simConnection : function (connection) {
      this.sim = true;
      this.simNumber = String(connection);
      this.connections.push(connection);
   },
   boardbrandConnection : function (connection) {
      this.boardbrand = true;
      this.landLine = true;
      this.landLineNumber = String(connection);
      this.connections.push(connection);
   },
   getConnections : function () {
      this.totalConnections = this.connections.length;
      return `${this.customerName} Your Total Connections is ${this.totalConnections} Connections.`;
   }
} 

console.table(user);

user.simConnection(96666756993);
user.boardbrandConnection(7095334396);

console.log(`\n${user.getConnections()}\n`);

console.table(user.connections);

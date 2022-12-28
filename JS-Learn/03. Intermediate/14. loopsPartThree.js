const social = ["Youtube", "Facebook", "Instagram", "Netflix", "Amazon"]

for (const n of social) {
   console.log(n);
}

const keys = {
   YT : "Youtube",
   FB : "Facebook",
   IN : "Instagram",
   NT : "Netflix",
   AM : "Amazon"
}

for (const e in keys) {
   console.log(`Keys ${e} values ${keys[e]} `);
}
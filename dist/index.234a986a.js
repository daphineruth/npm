const e=Object.freeze([{value:250,description:"Sold old TV 📺",user:"jonas"},{value:-45,description:"Groceries 🥑",user:"jonas"},{value:3500,description:"Monthly salary 👩‍💻",user:"jonas"},{value:300,description:"Freelancing 👩‍💻",user:"jonas"},{value:-1100,description:"New iPhone 📱",user:"jonas"},{value:-20,description:"Candy 🍭",user:"matilda"},{value:-125,description:"Toys 🚂",user:"matilda"},{value:-1800,description:"New Laptop 💻",user:"jonas"}]),o=Object.freeze({jonas:1500,matilda:100}),a=(e,o)=>e?.[o]??0,s=function(e,o,s,i,n="jonas"){const r=n.toLowerCase();return s<=a(o,r)?[...e,{value:-s,description:i,user:r}]:e},i=s(e,o,10,"Pizza 🍕"),n=s(i,o,100,"Going to movies 🍿","Matilda"),r=s(n,o,200,"Stuff","Jay"),t=(l=o,r.map((e=>e.value<-a(l,e.user)?{...e,flag:"limit"}:e)));var l;console.log(t);!function(e,o){const a=e.filter((e=>e.value<=-o)).map((e=>e.description.slice(-2))).join(" / ");console.log(a)}(t,500);
//# sourceMappingURL=index.234a986a.js.map
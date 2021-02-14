
function createaccount(){
const fullname = document.getElementById("fullname").value
const username = document.getElementById("chosen_username").value
const password = document.getElementById("password").value
const  contact = document.getElementById("contact").value
const  address = document.getElementById("address").value
const  email = document.getElementById("email").value


db.profile.put({ username:username,password:password,email:email, address:address, fullname:fullname, contact:contact})}

var db = new Dexie("3BM_DATABASE");

          db.version(1).stores({
              profile: '++,username,password,email,address,fullname,contact',
              house :'++,tobe,img,location,amount,bedroom,floor'
          });

          //
          // Put some data into it
          //
          
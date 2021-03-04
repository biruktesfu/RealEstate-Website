let login_username
function createaccount(){
    if((confirmpassword()) & (validatephonenumber(contact)) & (validateusername(firstname))& (validateusername(lastname))){
const firstname = document.getElementById("firstname").value
const lastname = document.getElementById("lastname").value
const username = document.getElementById("chosen_username").value
const password = document.getElementById("password").value
const  contact = document.getElementById("contact").value
const  email = document.getElementById("email").value
const  city = document.getElementById("city").value
const  state= document.getElementById("state").value



db.profile.put({ username:username,password:password,email:email, state:state,city:city, fullname:firstname+lastname, contact:contact})
sessionStorage.setItem('newusername', username);
sessionStorage.removeItem('username')
alert("account successfully created");
window.location.replace("profile.html");
let newusername = sessionStorage.getItem('newusername');
db.profile.get({username: newusername})
.then(data => {
    mainname_profile.innerHTML = data.fullname;
        fullname_profile.innerHTML= data.fullname;
        username_profile.innerHTML = data.username;
        contact_profile.innerHTML = data.contact;
        address_profile.innerHTML = data.state;
        email_profile.innerHTML = data.email;
 })
}
else if (!confirmpassword()){
    alert("password does not match")
}

else if (!validatephonenumber(contact)){
    alert("please enter the correct phone number")
}

}


var db = new Dexie("3BM_DATABASE");

          db.version(1).stores({
              profile: '++,username,password,email,state,city,fullname,contact',
              house :'++,tobe,img,location,amount,bedroom,floor,seller',
          });



// for entering data to the profile page
/*const data = ()=>{
const mainname_profile = document.getElementById("main_name");
const fullname_profile = document.getElementById("name_profile")
const username_profile = document.getElementById("username_profile")
const contact_profile = document.getElementById("contact_profile")
const  address_profile = document.getElementById("address_profile")
const  email_profile = document.getElementById("email_profile")

    db.profile.count((count) =>{
        if(count){
            db.profile.each(table=>{
                mainname_profile.innerHTML = table.fullname;
                fullname_profile.innerHTML= table.fullname;
                username_profile.innerHTML = table.username;
                contact_profile.innerHTML = table.contact;
                address_profile.innerHTML = table.address;
                email_profile.innerHTML = table.email;
            })
        }
    })
}*/



const display = ()=>{
    const dlocation = document.getElementById("dlocation");
    const damount = document.getElementById("damount")
    const dbedroom = document.getElementById("dbedroom")
    const dfloor = document.getElementById("dfloor")
    const img =  document.getElementById("img")
    const dtobe =  document.getElementById("dtobe")
        db.profile.count((count) =>{
            if(count){
                db.house.each(table=>{
                    dlocation.innerHTML = table.location;
                    damount.innerHTML= table.amount;
                    dbedroom.innerHTML = table.bedroom;
                    dfloor.innerHTML = table.floor;
                    dtobe.innerHTML = table.tobe;
                    img.innerHTML=`<img class="card-img-top" src = "${table.img}">`;})
            }
        })
    }
 display()   
    

function login_click(){
     let login_username = document.getElementById("login_username").value
    let login_password = document.getElementById("login_password").value
   db.profile.each(user => {
        if(login_username == user.username && login_password == user.password){
            sessionStorage.setItem('username', login_username);
            sessionStorage.removeItem('newusername')
            window.location.replace("profile.html");}
    } )}

function getprofile(){
const mainname_profile = document.getElementById("main_name");
const fullname_profile = document.getElementById("name_profile")
const username_profile = document.getElementById("username_profile")
const contact_profile = document.getElementById("contact_profile")
const  state_profile = document.getElementById("state_profile")
const  city_profile = document.getElementById("city_profile")
const  email_profile = document.getElementById("email_profile")

    let username = sessionStorage.getItem('username');
    let newusername = sessionStorage.getItem('newusername');
    if(username){
    db.profile.get({username: username  })
            .then(data => {
                mainname_profile.innerHTML = data.fullname;
                    fullname_profile.innerHTML= data.fullname;
                    username_profile.innerHTML = data.username;
                    contact_profile.innerHTML = data.contact;
                    state_profile.innerHTML = data.state;
                    city_profile.innerHTML = data.city;
                    email_profile.innerHTML = data.email;
             })}
    else{
        db.profile.get({username: newusername  })
        .then(data => {
            mainname_profile.innerHTML = data.fullname;
                fullname_profile.innerHTML= data.fullname;
                username_profile.innerHTML = data.username;
                contact_profile.innerHTML = data.contact;
                state_profile.innerHTML = data.state;
                city_profile.innerHTML = data.city;
                email_profile.innerHTML = data.email;
         })}
}

function sellahouse(){
    var x = document.getElementById("username_profile").textContent;
    db.profile.get({username: x})
    .then(data => {
        console.log(data.username)
    })
    const house_location = document.getElementById("city").value
    const img = document.getElementById("image").value
    const amount = document.getElementById("price").value
    const  bedroom = document.getElementById("room_number").value
    const  floor = document.getElementById("floor_number").value
    const modal = document.getElementById("sellModal")
   
    db.house.put({tobe:"FOR SELL",img:img,location:house_location,amount:amount,bedroom:bedroom,floor:floor,seller:x })
    alert("house  successfully published");
    window.location.replace("profile.html");
}

function confirmpassword()
{
    const password = document.getElementById("password").value
    const password1 = document.getElementById("password1").value
        if(password != password1) {
            console.log("password does not match1")
    
          return false
        } else if (password == password1){
            console.log(password)
            console.log(password1)
            console.log("password matchs")  
          return true
        }
        else{
            
        }
      }
      
     // password.onchange = validatePassword;
      //password1.onkeyup = validatePassword;
function validateusername(firstname){
    if(firstname ===''){
        alert("name cannot be empty")
        return false
    }
    else if ( /[0-9]+/g.test(firstname.value)) {
               alert("name should only be alphabet")
                return false;}
    else{
        return true;
    }
        }
   

function validatephonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.value ===''){
      return false
  }
  if((inputtxt.value.match(phoneno))){
      return true
  }
  else{
      return false
  }
   
}
function displayhouse(){
    i = 0
    var id1 = ""
    
    db.house.each(house => {
        console.log(house)
        i +=  1; 
        console.log(i)
        //console.log(i)
        const div =  document.getElementById(i)
        div.innerHTML = `<div class="container " id="bigdiv"> <h1></h1><div class="card-deck"> <div class="card" ><div class="card-body"><img class="card-img-top" src = ${house.img}"></div> <h5 class="card-title text-danger" id="dtobe">${house.tobe}</h5> <div class="row" ><div class="col-md-4"><h3>address:</h3></div><div class="col"><h3 id="daddress">${house.location}</h3></div></div><div class="col-md-4"></div></div><div class="row" ><div class="col-md-4"><h3>amount:</h3></div><div class="col"><h3 id="damount">${house.amount}</h3></div></div> <div class="row" > <div class="col-md-4"><h3>bedroom:</h3></div><div class="col"><h3 id="dbedroom">${house.bedroom}</h3></div> </div> <div class="row" ><div class="col-md-4"><h3>floor:<h3></div><div class="col"><h3 id="dfloor">${house.floor}</h3></div> </div> <a href="#" class="btn btn-primary ">Contact Seller</a> </div></div></div></div>`
        
})}
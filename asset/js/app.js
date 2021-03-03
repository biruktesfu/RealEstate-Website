
function createaccount(){
    if((confirmpassword()) & (validatephonenumber(contact)) & (validateusername(firstname))& (validateusername(lastname))){
const firstname = document.getElementById("firstname").value
const lastname = document.getElementById("lastname").value
const username = document.getElementById("chosen_username").value
const password = document.getElementById("password").value
const  contact = document.getElementById("contact").value
const  address = document.getElementById("address").value
const  email = document.getElementById("email").value



db.profile.put({ username:username,password:password,email:email, address:address, fullname:firstname+lastname, contact:contact})
alert("account successfully created");
window.location.replace("profile.html");}
else if (!confirmpassword()){
    alert("password does not match")
}

else if (!validatephonenumber(contact)){
    alert("please enter the correct phone number")
}

}
function sellahouse(){
    const house_location = document.getElementById("city").value
    const img = document.getElementById("image").value
    const amount = document.getElementById("price").value
    const  bedroom = document.getElementById("room_number").value
    const  floor = document.getElementById("floor_number").value
    const modal = document.getElementById("sellModal")
   
    db.house.put({tobe:"FOR SELL",img:img,location:house_location,amount:amount,bedroom:bedroom,floor:floor})
    alert("house  successfully published");
    window.location.replace("profile.html");
}

var db = new Dexie("3BM_DATABASE");

          db.version(1).stores({
              profile: '++,username,password,email,address,fullname,contact',
              house :'++,tobe,img,location,amount,bedroom,floor',
          });



// for entering data to the profile page
const data = ()=>{
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
}


data();
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
    



//for login page


login.addEventListener('click', login_click)


function login_click(){
    let login_username = document.getElementById("login_username").value
    let login_password = document.getElementById("login_password").value
    let login = document.querySelector("#login")
db.profile.each(user => {
    if(login_username == user.username && login_password == user.password){
        window.location.replace("profile.html");
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
       
    }

})

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
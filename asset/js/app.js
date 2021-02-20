
function createaccount(){
const fullname = document.getElementById("fullname").value
const username = document.getElementById("chosen_username").value
const password = document.getElementById("password").value
const  contact = document.getElementById("contact").value
const  address = document.getElementById("address").value
const  email = document.getElementById("email").value






db.profile.put({ username:username,password:password,email:email, address:address, fullname:fullname, contact:contact})
alert("account successfully created");
window.location.replace("profile.html");
}

var db = new Dexie("3BM_DATABASE");

          db.version(1).stores({
              profile: '++,username,password,email,address,fullname,contact',
              house :'baby,tobe,img,location,amount,bedroom,floor'
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


//for login page


login.addEventListener('click', login_click)


function login_click(){
    let login_username = document.getElementById("login_username").value
    let login_password = document.getElementById("login_password").value
    let login = document.querySelector("#login")
db.profile.each(user => {
    if(login_username == user.username && login_password == user.password){

        alert("sucessful")
    }else{
        alert("username or password incorrect")

    }
})

}


function rentahouse(){}



function logout(){
    if (confirm('ARE YOU SURE?')) {
        window.location.replace("index.html");
    } else {
        return false;
    }
   
}

const btn = document.querySelector("#test")
const inp = document.querySelector("#inp")
btn.addEventListener("click", show)

async function show(e){

    e.preventDefault()
    console.log("dd")
    await db.profile.get({username: "adatads"})
    .then(data => {
        console.log(data)
    })
}
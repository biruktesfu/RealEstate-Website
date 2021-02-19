function sellahousr(){}
function rentahouse(){}
const location = document.getElementById("location").value
const img = document.getElementById("img_ref").value
const amount = document.getElementById("amount").value
const  bedroom = document.getElementById("bedroom").value
const  floor = document.getElementById("floor").value
db.house.put({ location:location, img:img,amount:amount, bedroom:bedroom, floor:floor})



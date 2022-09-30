let Home= document.getElementById("HomeTimer")
let Guest= document.getElementById("GuestTimer")
let Hcount =0
let Gcount=0


function addHomeOne() {
    Hcount+=1
    Home.textContent= Hcount
    
}

function addHomeTwo() {
    Hcount+=2
    Home.textContent= Hcount
    
}
function addHomeThree() {
    Hcount+=3
    Home.textContent= Hcount
    
}

function addGuestOne() {
    Gcount+=1
    Guest.textContent= Gcount
    
}
function addGuestTwo() {
    Gcount+=2
    Guest.textContent= Gcount
    
}
function addGuestThree() {
    Gcount+=3
    Guest.textContent= Gcount
    
}
function reset(){

     Hcount =0
     Gcount=0
     Home.textContent= Hcount
     Guest.textContent= Gcount
    

}

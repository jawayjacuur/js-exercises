
// Blocking Synchronous):

function fetchUserDataSync(){
    alert ( "waa xogta userka")
    return{ name: "muumin", city: "mogadisho"}
}
console.log( "bilow xogta userka")
console.log(fetchUserDataSync())
console.log("mesejkan waxad soo saartaa marka la dhmetsiro.");
;


// Non-Blocking Asynchronous):

function daabacNonBlocking(callback) {
    setTimeout(() => {
        callback("soo daabac marka uu dhametirmo xogtan");
    }, 2000);
}

console.log("marka hore soo dabac non-blocking...");
daabacNonBlocking((user)=> {
    console.log(user)
})
console.log("mesejka waa mid si dhaqsi ah ku soo baxaya");


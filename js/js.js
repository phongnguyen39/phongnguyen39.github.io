// GIT HUB WEB API ////////////////////////
var request = new XMLHttpRequest();
request.open('get', 'https://api.github.com/users/phongnguyen39', true);
request.onload = function () {
    var data = JSON.parse(this.response);
    if (data.message == "API rate limit exceeded for 73.71.99.20. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)") {
        console.log("API Calls to GitHub exceeded")
    }
    else {
        document.getElementById("funStat").innerHTML = " Just for fun... API call to Github | " + data.public_repos + " repos";
    }
}
request.send();


// RATINGS ////////////////////////
var ratingsUp = 0;
var ratingsDown = 0;

function ratingUp() {
    ratingsUp += 1;
    console.log(ratingsUp)
}

function ratingDown() {
    ratingsDown += 1;
    console.log(ratingsDown);
}

//Indexdb testing /////////////////

// let openRequest = indexedDB.open("Ratings",1);

// openRequest.onupgradeneeded = function(){
//     console.log("User browser does not support IndexedDB")
// }

// openRequest.onerror = function(){
//     console.error("Error",openRequest.error);
// }

// openRequest.onsuccess = function(){
//     let db = openRequest.result;
//     // things I want to store... datetime, yes or no

//     db.createObjectStore("datetime",{keyPath:"id"})
//     console.log("db online");
//     console.log(db)
// }

function ratingUp() {
    console.log("Rating Up")
}

function ratingDown() {
    console.log("Rating Down")
}

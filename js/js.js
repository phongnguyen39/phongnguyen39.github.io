// GIT HUB WEB API ////////////////////////
var request = new XMLHttpRequest();
request.open('get', 'https://api.github.com/users/phongnguyen39', true);
request.onload = function () {
    var data = JSON.parse(this.response);
    try {
        console.log(data.message)
        if (data.message.substring(0,23) != "API rate limit exceeded") {
            document.getElementById("funStat").innerHTML = "<a href='https://github.com/phongnguyen39'>Just for fun... this is an API call to Github | " + data.public_repos + " repos</a>";
        }
        
    } catch (error) {
        var currentDateTime = new Date();

        document.getElementById("funStat").innerHTML = currentDateTime;
    }
}
request.send();


https://www.healthit.gov/data/open-api?source=hospital-mu-public-health-measures.csv

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

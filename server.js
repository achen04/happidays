document.addEventListener("DOMContentLoaded", function() {
	chrome.management.getAll(getAllCallback);
	document.getElementById("textData").addEventListener("blur", submitData);

	// Initialize userid
	chrome.storage.sync.get('userid', function(items) {
	    var userid = items.userid;
	    if (!userid) {
	        userid = getRandomToken();
	        chrome.storage.sync.set({userid: userid}, function() {
	            console.log("user id is", userid);
	        });
	    }
	});


    // Only wait the description to show up of the same day

    var d = new Date();
    d.setHours(0,0,0,0)

    chrome.storage.sync.get(null, function(data) {
    	console.log("-----", data);
    })

	chrome.storage.sync.get("description", function(getDescription) {
		if (getDescription) {
			chrome.storage.sync.get("date", function(getDate) {
				console.log(getDate);
				if (d == getDate.date) {
					document.getElementById("textData").value = getDescription.description;
				}
			});
		}
	});


	// Initialize community posts

	getUserData();
});

// var getAllCallback = function(list) {
// 	console.log(list); // information about the window (google API response)
// };


function getRandomToken() {
    // E.g. 8 * 32 = 256 bits token
    var randomPool = new Uint8Array(32);
    crypto.getRandomValues(randomPool);
    var hex = '';
    for (var i = 0; i < randomPool.length; ++i) {
        hex += randomPool[i].toString(16);
    }
    // E.g. db18458e2782b2b77e36769c569e263a53885a9944dd0a861e5064eac16f1a
    return hex;
}



function submitData() {
	var data = document.getElementById("textData").value;
	var date = new Date();
	date.setHours(0,0,0,0);


	chrome.storage.sync.get('userid', function(items) {
		var userid = items.userid;
		// STORING IN SERVER
		postData(userid, data);
	});


	// STORING IN LOCAL CHROME STORAGE
    chrome.storage.sync.set({'description': data}, function() {
    });
    chrome.storage.sync.set({'date': String(date)}, function() {
      // Notify that we saved.
      console.log('Settings saved as', String(date));
    });

    getUserData();
	console.log(data);

}

function postData(userid, data) {
	// SENDING POST REQUEST TO MLAB
	var myKey = config.KEY;

	console.log("HERE", userid);
	var http = new XMLHttpRequest();
	var url = "https://api.mlab.com/api/1/databases/happidays/collections/testing?apiKey=" + myKey;
	var postData = JSON.stringify( {userid: userid, description: data, date: new Date()} );
	http.open("POST", url, true);
	http.setRequestHeader("Content-type", "application/json");

	http.onreadystatechange = function() { //Call a function when the state changes.
	    if(http.readyState == 4 && http.status == 200) {
	       // when this is done posting, what should we do?
	       // alert(http.responseText);
	    }
	}
	http.send(postData);
}

// Fetches data from remote db and displays most recent ones
function getUserData() {
	chrome.storage.sync.get('userid', function(items) {
		userid = items.userid;
		// STORING IN SERVER
		getUserDataFromServer(userid);
	});


}

// Getting user data from mlab sorted by most recent ones
function getUserDataFromServer(userid) {
	var xhr = new XMLHttpRequest();
	var userid = JSON.stringify(userid);
	var url = "https://api.mlab.com/api/1/databases/happidays/collections/testing?q={'userid':" + userid + "}&s={'date': -1}&apiKey=aUoDYGZ16JJeewazabXIAE11PWU7I1ag";
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
	    var resp = JSON.parse(xhr.responseText);
	    displayUserData(resp);
	    console.log("RESPONSE IS", resp);
	  }
	}
	xhr.send();
}

function displayUserData(data) {

}

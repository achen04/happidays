document.addEventListener("DOMContentLoaded", function() {
chrome.management.getAll(getAllCallback);
document.getElementById("textData").addEventListener("blur", submitData);


chrome.storage.sync.get('userid', function(items) {
    var userid = items.userid;
    if (!userid) {
        userid = getRandomToken();
        chrome.storage.sync.set({userid: userid}, function() {
            console.log("user id is", userid);
        });
    }
});


chrome.storage.sync.get("description", function(getdata) {
	console.log("GETTING FROM DATABASE", getdata.description); // make this show up in frontend
	// TODO: deal with case of when nothing has been submitted yet
})

});

var getAllCallback = function(list) {
	console.log(list); // information about the window (google API response)
};


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
	var userid;
	chrome.storage.sync.get('userid', function(items) {
		userid = items.userid;
		// STORING IN SERVER
		postData(userid, data);
	});


	// STORING IN LOCAL CHROME STORAGE
    chrome.storage.sync.set({'description': data}, function() {
      // Notify that we saved.
      console.log('Settings saved');
    });



	console.log(data);

}

function postData(userid, data) {
	// SENDING POST REQUEST TO MLAB
	console.log("HERE", userid);
	var http = new XMLHttpRequest();
	var url = "https://api.mlab.com/api/1/databases/happidays/collections/testing?apiKey=aUoDYGZ16JJeewazabXIAE11PWU7I1ag";
	var postData = JSON.stringify( {userid: userid, description: data} );
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



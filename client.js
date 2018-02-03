document.addEventListener("DOMContentLoaded", function() {
chrome.management.getAll(getAllCallback);
document.getElementById("textData").addEventListener("blur", clientSubmit);

});



var getAllCallback = function(list) {
	console.log(list); // information about the window (google API response)
};


function clientSubmit() {
	var data = document.getElementById("textData").value;
	// console.log(data);
	var userDat = getUserData();
	// var userData = getUserDataFromServer(userId);
	console.log("Returned " + userDat);

	// document.getElementById("uInput").innerHTML = data;
}

function parseDate(date1) {
	return (new Date(date1).toString()).split(/\s+/).slice(0,3).join(" ");
}


function displayUserData(data) {
	console.log("-=-=-=-=", data);
	document.getElementById('card1').innerHTML = data[0].description;
	document.getElementById('card2').innerHTML = data[1].description;
	document.getElementById('card3').innerHTML = data[2].description;
	document.getElementById('card4').innerHTML = data[3].description;
	document.getElementById('card5').innerHTML = data[4].description;

	document.getElementById('card1_date').innerHTML = parseDate(data[0].date);
	document.getElementById('card2_date').innerHTML = parseDate(data[1].date);
	document.getElementById('card3_date').innerHTML = parseDate(data[2].date);
	document.getElementById('card4_date').innerHTML = parseDate(data[3].date);
	document.getElementById('card5_date').innerHTML = parseDate(data[4].date);

	console.log()
}

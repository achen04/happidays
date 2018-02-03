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


function displayUserData(data) {
	console.log("-=-=-=-=", data);
	document.getElementById('card1').innerHTML = data[0].description;
	document.getElementById('card2').innerHTML = data[1].description;
	document.getElementById('card3').innerHTML = data[2].description;
	document.getElementById('card4').innerHTML = data[3].description;
	document.getElementById('card5').innerHTML = data[4].description;

	document.getElementById('card1_date').innerHTML = data[0].date;
	document.getElementById('card2_date').innerHTML = data[1].date;
	document.getElementById('card3_date').innerHTML = data[2].date;
	document.getElementById('card4_date').innerHTML = data[3].date;
	document.getElementById('card5_date').innerHTML = data[4].date;

	var date1 = (new Date(data[0].date));
	console.log("Hello how are you now w w w".split(/\s+/).slice(0,5).join(" "));


}

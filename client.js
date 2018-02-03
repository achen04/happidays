document.addEventListener("DOMContentLoaded", function() {
chrome.management.getAll(getAllCallback);
document.getElementById("textData").addEventListener("blur", clientSubmit);
});



var getAllCallback = function(list) {
	console.log(list); // information about the window (google API response)
};


function clientSubmit() {
	var data = document.getElementById("textData").value;
	console.log(data);
	// document.getElementById("uInput").innerHTML = data;
}

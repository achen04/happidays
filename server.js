
document.addEventListener("DOMContentLoaded", function() {
chrome.management.getAll(getAllCallback);
document.getElementById("myButton").addEventListener("click", submitData);
});

var getAllCallback = function(list) {
	console.log(list); // information about the window (google API response)
};


function submitData() {
	var data = document.getElementById("textData").value;
	console.log(data);
	console.log("data should show up");
}



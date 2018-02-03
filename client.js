document.addEventListener("DOMContentLoaded", function() {
chrome.management.getAll(getAllCallback);
document.getElementById("textData").addEventListener("keypress", function (e) {
	var key = e.which || e.keyCode;
	 if (key === 13) { // 13 is enter
		 clientSubmit();
	 }
});
});



var getAllCallback = function(list) {
	console.log(list); // information about the window (google API response)
};


function clientSubmit() {
	var data = document.getElementById("textData").value;
	console.log(data);
	// document.getElementById("uInput").innerHTML = data;
}

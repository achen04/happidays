document.addEventListener("DOMContentLoaded", function() {
document.getElementById("textData").addEventListener("blur", clientSubmit);

});




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
	if (data.length > 0) {
		document.getElementById('card1').innerHTML = data[0].description;
		document.getElementById('card1_date').innerHTML = parseDate(data[0].date);
	} 

	if (data.length > 1) {
		document.getElementById('card2').innerHTML = data[1].description;
		document.getElementById('card2_date').innerHTML = parseDate(data[1].date);
	}

	if (data.length > 2) {
		document.getElementById('card3').innerHTML = data[2].description;
		document.getElementById('card3_date').innerHTML = parseDate(data[2].date);
	}

	if (data.length > 3) {
		document.getElementById('card4').innerHTML = data[3].description;
		document.getElementById('card4_date').innerHTML = parseDate(data[3].date);
	}

	if (data.length > 4) {
		document.getElementById('card5').innerHTML = data[4].description;
		document.getElementById('card5_date').innerHTML = parseDate(data[4].date);
	}

}

function displayCommunityData(data) {
	console.log("-=-=-=-=", data);
	if (data.length > 0) {
		document.getElementById('com_card1').innerHTML = data[0].description;
		document.getElementById('com_card1_date').innerHTML = parseDate(data[0].date);
	} 

	if (data.length > 1) {
		document.getElementById('com_card2').innerHTML = data[1].description;
		document.getElementById('com_card2_date').innerHTML = parseDate(data[1].date);
	}

	if (data.length > 2) {
		document.getElementById('com_card3').innerHTML = data[2].description;
		document.getElementById('com_card3_date').innerHTML = parseDate(data[2].date);
	}

	if (data.length > 3) {
		document.getElementById('com_card4').innerHTML = data[3].description;
		document.getElementById('com_card4_date').innerHTML = parseDate(data[3].date);
	}

	if (data.length > 4) {
		document.getElementById('com_card5').innerHTML = data[4].description;
		document.getElementById('com_card5_date').innerHTML = parseDate(data[4].date);
	}



}

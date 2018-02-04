document.addEventListener("DOMContentLoaded", function() {
document.getElementById("textData").addEventListener("blur", clientSubmit);

});


// txt is the text to measure, font is the full CSS font declaration,
// e.g. "bold 12px Verdana"
function measureText(txt, font) {
    var id = 'text-width-tester',
        $tag = $('#' + id);
    if (!$tag.length) {
        $tag = $('<span id="' + id + '" style="display:none;font:' + font + ';">' + txt + '</span>');
        $('body').append($tag);
    } else {
        $tag.css({font:font}).html(txt);
    }
    return {
        width: $tag.width(),
        height: $tag.height()
    }
}

function shrinkToFill(input, fontSize, fontWeight, fontFamily) {
    var $input = $(input),
        txt = $input.val(),
        maxWidth = $input.width() + 5, // add some padding
        font = fontWeight + " " + fontSize + "px " + fontFamily;
    // see how big the text is at the default size
    var textWidth = measureText(txt, font).width;
    if (textWidth > maxWidth) {
        // if it's too big, calculate a new font size
        // the extra .9 here makes up for some over-measures
        fontSize = fontSize * maxWidth / textWidth * .9;
        font = fontWeight + " " + fontSize + "px " + fontFamily;
        // and set the style on the input
        $input.css({font:font});
    } else {
        // in case the font size has been set small and
        // the text was then deleted
        $input.css({font:font});
    }
}

$(function() {
    $('#textData').keyup(function() {
        shrinkToFill(this, 60, "", "Georgia, serif");
    })
});

var com_cards = ["com_card1", "com_card2", "com_card3", "com_card4", "com_card5"];

$(document).ready(function(){

	/*
    $("#com_card1").hover(function(){
        $(this).css("background-color", "blue");
        }, function(){
        $(this).css("background-color", "pink");
    }); */

    // Add rating when like
    $("button").click(function(){
    	var elementID = $(this).prev().attr('id');
    	for (var i = 0; i < 5; i++) {
    		if (elementID == com_cards[i]) {
    			addRating(i);
    		}
    	}
    });


});

function clientSubmit() {
	var data = document.getElementById("textData").value;
	// console.log(data);
	var userDat = getUserData();
	// var userData = getUserDataFromServer(userId);
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
		document.getElementById('com_card1').innerHTML = "\"" + data[0].description + "\"";
		// document.getElementById('com_card1_date').innerHTML = parseDate(data[0].date);
		console.log(data[0].rating);
	}

	if (data.length > 1) {
		document.getElementById('com_card2').innerHTML = "\"" +  data[1].description + "\"";
		// document.getElementById('com_card2_date').innerHTML = parseDate(data[1].date);
		console.log(data[1].rating);

	}

	if (data.length > 2) {
		document.getElementById('com_card3').innerHTML = "\"" + data[2].description + "\"";
		// document.getElementById('com_card3_date').innerHTML = parseDate(data[2].date);
	}

	if (data.length > 3) {
		document.getElementById('com_card4').innerHTML = "\"" + data[3].description + "\"";
		// document.getElementById('com_card4_date').innerHTML = parseDate(data[3].date);
	}

	if (data.length > 4) {
		document.getElementById('com_card5').innerHTML = "\"" + data[4].description + "\"";
		// document.getElementById('com_card5_date').innerHTML = parseDate(data[4].date);
	}
}

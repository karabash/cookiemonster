






//   IKINCI OLARAK EKLEMEK ISTEDIGIM URL LER
//461907d1493ba089
//Visa receptbetyg     GET https://edu.oscarb.se/sjk15/api/recipe/?api_key=461907d1493ba089&recipe=tiger_kaka

//Rösta på ett recept   GET https://edu.oscarb.se/sjk15/api/recipe/?api_key=461907d1493ba089&recipe=tiger_kaka&rating=4



// JavaScript (jQuery) för att hämta SMHI data (med AJAX)
function showVotes() {
	$("#messageDiv").html("<b>Hämtar röster... Var god vänta...</b>");
	$.ajax({
		method: "GET",
		url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=b716cea593bb104f&recipe=cronut",
		success: function (data) {
			$('#rating1').text(data.rating);
			$('#vote').text(data.votes);
			$('#recipe').text(data.recipe);
			$("#messageDiv").empty();
		},
		
	});
}


$('.rating a').click(function () {
	// Kod som körs när man klickar på knappen
	var rateValue = $(this).text();
	var url = "	https://edu.oscarb.se/sjk15/api/recipe/?api_key=b716cea593bb104f&recipe=cronut";
	url = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=b716cea593bb104f&recipe=cronut&rating=5";
	var params = "recipe=cronut&rating=" + rateValue;
	params = "";
	$("#messageDiv").html("<b>Skickar din röst... Var god vänta...</b>");

	$.ajax({
		method: "GET",
		data: { user_rating: rateValue },
		url: url + params,
		success: function (data) {
			showVotes();
			$("#messageDiv").empty();
		}
	});

});

$(document).ready( function(){
	showVotes();
});


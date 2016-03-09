






//   IKINCI OLARAK EKLEMEK ISTEDIGIM URL LER
//461907d1493ba089
//Visa receptbetyg     GET https://edu.oscarb.se/sjk15/api/recipe/?api_key=461907d1493ba089&recipe=tiger_kaka

//Rösta på ett recept   GET https://edu.oscarb.se/sjk15/api/recipe/?api_key=461907d1493ba089&recipe=tiger_kaka&rating=4



// JavaScript (jQuery) för att hämta SMHI data (med AJAX)
function showVoteScone() {
	$("#messageDivS").html("<b>Hämtar röster... Var god vänta...</b>");
	$.ajax({
		method: "GET",
		url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=d7607304c8de1b93&recipe=scones",
		success: function (data) {
			$('#ratingS').text(data.rating);
			$('#voteS').text(data.votes);
			$('#recipeS').text(data.recipe);
			$("#messageDivS").empty();
		},
		
	});
}


$('.ratingScones a').click(function () {
	// Kod som körs när man klickar på knappen
	var rateValueS = $(this).text();
	var urlS = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=d7607304c8de1b93&recipe=scones";
	url = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=d7607304c8de1b93&recipe=scones&rating=5";
	var paramsS = "recipe=cronut&rating=" + rateValueS;
	paramsS = "";
	$("#messageDivS").html("<b>Skickar din röst... Var god vänta...</b>");

	$.ajax({
		method: "GET",
		data: { user_rating: rateValueS },
		url: url + paramsS,
		success: function (data) {
			showVoteScone();
			$("#messageDivS").empty();
		}
	});

});

$(document).ready( function(){
	showVoteScone();
});


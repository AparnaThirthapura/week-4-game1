$(document).ready(function(){

	var tarScore = 0;
	var wins = 0, loses = 0;
	var totScore = 0;
	var scrUpdate = 0;
	var crystalScore = [];
	var crystal0, crystal1, crystal2, crystal3;
	var crystalValues;

	gameInitialize();
	displayGame();

	function getRandomInt(min, max){
		return Math.floor(Math.random() * (max - min - 1)) + min;
	}

	function cryPicRandomInitialize(){
		for(var i = 0; i < 4; i++)
		{
			var num = getRandomInt(1, 15);
			while(crystalScore.indexOf(num) > -1){
				num = getRandomInt(1, 15);
			}
			crystalScore.push(num);
		}
		
		crystalValues = {
			"crystal0": crystalScore[0],
			"crystal1": crystalScore[1],
			"crystal2": crystalScore[2],
			"crystal3": crystalScore[3]
		};
	}

	function gameInitialize(){
		tarScore = getRandomInt(30, 150);
		cryPicRandomInitialize();
		totScore = 0;
		scrUpdate = 0;

	}

	function displayGame(){
		

		$("#targetScore").text(tarScore);
		$("#totalScore").text(totScore);
		$("#scoreUpdate").text(scrUpdate);
		$("#win").text(wins);
		$("#loss").text(loses);
		 
	}

	function crystalClicked() {
		alert("hello");
	}


	$(document).on("click", "img", function() {
		var a = $(this.id);
		scrUpdate = crystalValues.a;


		displayGame();
	});



});



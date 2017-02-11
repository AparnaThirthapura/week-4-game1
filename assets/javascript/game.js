$(document).ready(function(){

	var tarScore = 0;
	var wins = 0, loses = 0;
	var totScore = 0;
	var scrUpdate = 0;
	var crystalScore = [];
	// var crystal0, crystal1, crystal2, crystal3;
	// var crystalValues;

	var crystal = {
		crystal0:{ name: "aquamarine",value:  0},
		crystal1:{ name: "garnet", value:  0},
		crystal2:{ name: "peridot", value: 0},
		crystal3:{ name: "tanzanite", value: 0}
	};


	gameInitialize();
	displayGame();

	function getRandomInt(min, max){
		return Math.floor(Math.random() * (max - min - 1)) + min;
	}

	// function cryPicRandomInitialize(){
	// 	for(var i = 0; i < 4; i++)
	// 	{
	// 		var num = getRandomInt(1, 15);
	// 		while(crystalScore.indexOf(num) > -1){
	// 			num = getRandomInt(1, 15);
	// 		}
	// 		crystalScore.push(num);
	// 	}
		
		
	// }

	function gameInitialize(){
		tarScore = getRandomInt(30, 150);
		totScore = 0;
		scrUpdate = 0;
		crystal.crystal0.value = getRandomInt(1,15);
		crystal.crystal1.value = getRandomInt(1,15);
		crystal.crystal2.value = getRandomInt(1,15);
		crystal.crystal3.value = getRandomInt(1,15);

	}

	function displayGame(){
		

		$("#targetScore").html(tarScore);
		$("#totalScore").html(totScore);
		$("#scoreUpdate").html(scrUpdate);
		$("#win").html(wins);
		$("#loss").html(loses);
		 
	}

	// function crystalClicked() {
	// 	alert("hello");
	// }


	// $(document).on("click", "img", function() {
	// 	var a = $(this.id).attr("");
	// 	scrUpdate = crystalValues.a;

	$("#crystal0").click(function(){
			$("#scoreUpdate").html(crystal.crystal0.value);
	});

	$("#crystal1").click(function(){
			$("#scoreUpdate").html(crystal.crystal1.value);
	});

	$("#crystal2").click(function(){
			$("#scoreUpdate").html(crystal.crystal2.value);
	});

	$("#crystal3").click(function(){
			$("#scoreUpdate").html(crystal.crystal3.value);
	});



	// $(".cryPic").click(function(){
	// 	for(i = 0; i < 3; i++){
	// 		var crystalValue = ($(this).attr(crystal.crystal[i]).value);
	// 	}
	// 	crystalValue = parseInt(crystalValue);
	// 	totScore += crystalValue;

	// 	if()
	// })

		displayGame();
});







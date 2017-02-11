// 1. Create a random target number from 30 to 150
// 2. For each crystal create a unique random number from 1 to 15
// 3. When user clicks on each crystal display that random number on score update and display 
// 	the total score by adding that number.
// 4. When the total score is equal to the targer score update win
// 	else if the user guess is greater than the target number update loss
// 		and display the score in the Score Board.

// Repeat the whole thing after each win or loss
$(document).ready(function(){


var win = 0;
var loss = 0;
var tarRanNumber;
var crystalScore = [];
var scoreUpdate = 0;
var totScore = 0;
var crystal = {};



function initialize(){
	tarRanNumber = Math.floor(Math.random() * (120)) + 30;
	$("#targetScore1").html(tarRanNumber);

	crystalScore = [];
	totScore = 0;
	scoreUpdate = 0;



	for(var i = 0; i < 4; i++){
		var num = Math.floor(Math.random() * (14)) + 1;
		while(crystalScore.indexOf(num) > -1){
			num = Math.floor(Math.random() * (14)) + 1;
		}
		crystalScore.push(num);
	}

	crystal = {
		crystal0:{ name: "aquamarine",value: crystalScore[0]},
		crystal1:{ name: "garnet", value: crystalScore[1]},
		crystal2:{ name: "peridot", value: crystalScore[2]},
		crystal3:{ name: "tanzanite", value: crystalScore[3]}
	};
}

$("#crystal0").click(function(){
	buttonClicked(crystal.crystal0.value);
});

$("#crystal1").click(function(){
	buttonClicked(crystal.crystal1.value);
});

$("#crystal2").click(function(){
	buttonClicked(crystal.crystal2.value);
});

$("#crystal3").click(function(){
	buttonClicked(crystal.crystal3.value);
});

function buttonClicked(num){
	scoreUpdate = num;
	
	totScore = totScore + num;
	
	if(totScore === tarRanNumber){
		win++;
		alert("You Win!!!!!!!");
		initialize();
	}
	else if(totScore > tarRanNumber){
		loss++;
		alert("You Lose!!!!!!!");
		initialize();
	}

	display();

}

function display(){
	$("#scoreUpdate1").html(scoreUpdate);
	$("#totalScore1").html(totScore);
	$("#win").html(win);
	$("#loss").html(loss);

}

initialize();
display();

});

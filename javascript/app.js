//Create and insert wins
var wins = 0;
$('#wins').text(wins);

//Create and insert losses
var losses = 0;
$('#losses').text(losses)

//Create and insert user total
var counter = 0;
function resetCounter(){
    counter = 0;
    $('#yourTotal').text(counter);
}
resetCounter();

//Generate Number to Guess
var numberToGuess = 0;
var randomInt = function(){
    numberToGuess = Math.floor(Math.random()*100) + 19;
    return numberToGuess;
}    

//Insert Random Number to Guess in the DOM
randomInt();
$('#activeNumber').text(numberToGuess);

//Assign Random Values to Each Photo
function assignButtonValues(){
    for (var i=1; i<5;i++){
        var randomValue = Math.floor(Math.random()*11) + 1;
        $('#img'+i).attr('value', randomValue);
    }
}
assignButtonValues();

//Choose New Random Number to Guess
function newNumber(){
    randomInt();
    $('#activeNumber').text(numberToGuess);
}

//Check for Win and Reset
function checkForWin() {
    if (counter === numberToGuess){
        
        //Update Wins
        wins ++;
        $('#wins').text(wins);

        //Create new number to guess and reset counter
        newNumber()
        resetCounter();

        //Reassign Button Values
        assignButtonValues();
    };
};    

//Check for losses
function checkForLosses(){
    if (counter > numberToGuess){

        //Add loss
        losses ++;
        $('#losses').text(losses)

        //Create new number to guess and reset counter
        newNumber()
        resetCounter();  
        
        //Reassign Button Values
        assignButtonValues();
    }
}

//Event Handler for Each Photo
$('.jewel').on('click', function(){
    var addedValue = parseInt($(this).attr('value'));
    counter += addedValue;
    $('#yourTotal').html(counter);
    checkForWin();
    checkForLosses();
    return counter;
})







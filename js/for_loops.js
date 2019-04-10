//Q2
// Option 1: make a function that you can use as a tool within your main function!!!
function outputRow(num1, num2) {
    var output = '';
    var total = num1 * num2;
    output += num1 + 'x' + num2 + '=' + total;
    return output;
}

function showMultiplicationTable(num) {
    // create output variable
    var output = '';

    //iterate over numbers 1- 10 (this is because you only need it to go to 10. If it was 11 it would be <=11
    for (var i = 1; i <=10; i+=1){

        //concatenate to the output variable this...
            //pass in the num value and the value of the iterator to outputRow()
            // "/n" is a break for JS?
        output += outputRow(num, i) + "\n";
    }
    return output;
}

// Q3

for (var y = 1; y <= 10; y++){
    var math = Math.floor(Math.random() * (200 -20 +1)) + 20;
    if (math % 2 === 0) console.log(math + " is even");
    else if (math % 1 === 0) console.log(math + " is odd");
}


// OR!!
// Create multiple functions again!!!

//Function to create random number

function returnRandNum(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

//Function to console log if number is even or odd

function isEvenOdd(num) {
    var outputMessage = num;
    outputMessage += (num % 2 === 0) ? "is even" : "is odd";
    console.log(outputMessage);
}

//Main function to iterate 10 times

function evenOddCalculator(){
    for (var i = 1; i <=10; i +=1) {
        //generate random number
        var randNum = returnRandNum(20,200);
        // check if rand num is even or odd
        isEvenOdd(randNum);
        //output results
    }
}

//Q4
// Always console log through your steps so you can test the steps you have made!!

for (var x = 1; x <10; x += 1){
    console.log(String(x).repeat(x));
}

//repeat will repeat what you have put however many times you input!
//Make sure to look up repeat!
// OR!!! Make a nested for loop

for (var i = 1; 1 <10; i += 1){
    // make an output
    var output = "";
    //loop up to the current value of i and concatenate the value of the current value to the output
    for (var j = 1; j <= i; j += 1){
        output += "1";
    }
}



// Q 5
for (i = 100 ; i >=5 ; i-=5){
    console.log(i);
}
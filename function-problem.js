
// inch to feet problem
function inchToFeet(inch){
    var givenData = inch;
    var result = givenData/12;
    return result;
}
console.log("Result is" +" " + inchToFeet(48));

//even odd find

function evenOdd(number){
    var num = number;
    if (num%2 == 0) {
        console.log('Given number is Even') 
    }
    else{
        console.log('Given number is Odd')
    }
}
evenOdd(25);
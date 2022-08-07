
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

// array elemnt problem

function getArraySum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const elemnt = numbers[index];
        sum =sum + elemnt;
        console.log(index, elemnt, sum)
    }
    return sum;
}
const myNumber = [67, 45, 33, 66, 12, 45, 55];
getArraySum(myNumber,);

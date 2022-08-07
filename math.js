const result = Math.pow(4,2);
console.log(result);

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
if (gap < 5) {
    console.log('yes');
}
else{
    console.log('No');
}

//Math.round()  floor and celling
//Math.random()   || Mathe.random()*100  ekek bar ekek number returnd dibe
//Math.max()
//Math.min()


for(let i=0; i<5; i++){
    const random = Math.round(Math.random()*6)
    console.log(random);
}




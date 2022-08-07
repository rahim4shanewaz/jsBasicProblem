/*
function sentence(line){
    let add = '';
    for(let i = 0; i< line.length; i++){
        const index = i;
        const element = line[i];
        add = add + element;
        console.log(index, element, add);
    }
    console.log(add);
}

const givensentence = "i dont kno what i am doing";
const output = sentence(givensentence);
*/


function sentence(line){
    let total = '';
    for(let i = line.length -1; i>=0; i--){
        const index = i;
        const element = line[i];
        total = total + element;
        console.log(index, element);

    }
    return total;
}
const givensentence = "i dont know what i am doing";
const output = sentence(givensentence);
console.log(output);



/*
function sentence(line){
   
        const word = line.split(" ");
        console.log(word);
        const result = [];
        for(let i=word.length - 1; i >= 0; i--){
            const element = word[i];
            result.push(element);
        }

        const reverseline = result.join(' ');
    return reverseline;

}
const givensentence = "i dont know what i am";
const all = sentence(givensentence);
console.log(all);

*/
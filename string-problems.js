// search in string using Lower and Upper case

const sentence = 'la la ja esse likhbo string search'
const searchword = 'esse'
const allCaseSameMain = sentence.toLowerCase();
const allCaseSameSearch =searchword.toLowerCase();
const exists = allCaseSameMain.includes(allCaseSameSearch);
console.log(exists);


//indexof
console.log(sentence.indexOf('esse'));

if (sentence.indexOf('esse') !== -1) {
    console.log('availave')
}
else{
    console.log('not available')
}
// endswith
//startwith

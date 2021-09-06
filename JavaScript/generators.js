function* getData() {
    yield "1";
    yield "2";
    yield "3";
    yield "4";

    return "10"
}

debugger;

var dataGenerator = getData();

debugger;
var firstValue = dataGenerator.next();
console.log(firstValue.value);

var secondValue = dataGenerator.next();
console.log(secondValue.value)


var thirdValue = dataGenerator.next();
console.log(thirdValue.value);

var forthValue = dataGenerator.next();
console.log(forthValue.value)

debugger;
var fifth = dataGenerator.next();
console.log(fifth.value)

debugger;
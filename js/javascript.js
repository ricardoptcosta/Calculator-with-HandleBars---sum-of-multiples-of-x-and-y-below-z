document.addEventListener("DOMContentLoaded", function () {
    //Get the contents from the script block 
    var source = document.querySelector("#result-template").innerHTML;
    //Compile that baby into a template
    template = Handlebars.compile(source);
    document.querySelector("#demoButton").addEventListener("click", function () {
        var firstNumber = document.querySelector("#firstNumber").value;
        var secondNumber = document.querySelector("#secondNumber").value;
        var thirdNumber = document.querySelector("#thirdNumber").value;
        var result = calculateResult(firstNumber, secondNumber, thirdNumber);
        var html = template({
            firstNumber: firstNumber,
            secondNumber: secondNumber,
            thirdNumber: thirdNumber,
            result: result
        });
        document.querySelector("#resultDiv").innerHTML = html;
    });
});

function calculateResult(firstNumber, secondNumber, thirdNumber) {

    var array = [];

    for (var i = 0; i < thirdNumber; i++) {
        if (i % firstNumber == 0) {
            array.push(i);
            continue;
        }
        if (i % secondNumber == 0) {
            array.push(i);
        }
    };

    var reducer = (accumulator, currentValue) => accumulator + currentValue;
    var sum = array.reduce(reducer);

    return sum;
};

function calculate(num1, num2) {
    let addingResult = num1 + num2;
    if (addingResult >= 0) {
        console.log("Wynik dodawania wynosi " + addingResult);
    } else {
        console.log("Wynik dodawania jest nieprawidłowy");
    }


    let subtractResult = num1 - num2;
    if (subtractResult >= 0) {
        console.log("Wynik odejmowania wynosi " + subtractResult);

    } else {
        console.log("Wynik odejmowania jest nieprawidłowy");
    }
   

    let multiplyResult = num1 * num2;
    if (multiplyResult >= 0) {
        console.log ("Wynik mnożenia wynosi " + multiplyResult);

    } else {
        console.log("Wynik mnożenia jest nieprawidłowy");
    }
    

}



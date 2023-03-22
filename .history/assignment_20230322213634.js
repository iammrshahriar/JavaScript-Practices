function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let product = number * i;
        console.log(number + " x " + i + " = " + product);
    }
}
var number = multiplicationTable(2, 3, 4, 5, 6, 7, 8, 9, 10);
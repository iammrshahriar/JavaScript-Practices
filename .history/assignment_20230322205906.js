function multiplicationTable() {
    let number = prompt("Please enter an Integer : ");
    for (let i = 1; i <= 10; i++) {
        let product = number * i;
        console.log(number + " x " + i + " = " + product);
    }
}
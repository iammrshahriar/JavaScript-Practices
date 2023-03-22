function multiplicationTable(num)
let num = prompt("Please enter an Integer : ") {
    for (let i = 1; i <= 10; i++) {
        let product = num * i;
        console.log(num + " x " + i + " = " + product);
    }
}
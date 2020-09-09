function converteBase() {
    let numero = document.getElementById("numero").value;

    let valores = document.getElementById("numbers").value;

    let valoresArray = valores.split(' ');

    let numbers = valoresArray.map(num => parseInt(num));

    numbers.reverse()

    switch (parseInt(numero)) {
        case 16:
            hexa(numbers);
            break;
        case 10:
            decimal(numbers);
            break;
        case 2:
            binario(numbers);
            break;
        default: 
            console.log('error');
    }
}

function binario(numbers) {
    let decimal = 0;

    let toDecimal = numbers.map((num, i) => {
        let number = 2 ** i * num;

        console.log(`2^${i} x ${num} = ${number}`);

        return number;
    })

    toDecimal.forEach(num => {
        decimal += num;
    })

    console.log(decimal);
    console.log('----------------------')
}

function hexa(numbers) {
    let hexa = 0;
    
    console.log('Decimal')
    
    let toHexa = numbers.map((num, i) => {
        let number = 16 ** i * num;

        console.log(`16^${i} x ${num} = ${number}`)

        return number;
    })

    toHexa.forEach(num => hexa += num);

    console.log(hexa);
    console.log('----------------------')
    console.log('Binario')
    decimal(hexa);
}

function decimal(numbers) {
    let arrayNumero = [];
    let arrayDivisor = parseInt(numbers);

    while (arrayDivisor != 1) {
        arrayNumero.push(arrayDivisor % 2);
        arrayDivisor = parseInt(arrayDivisor / 2);
    }

    if (parseInt(numbers) % 2 == 0) arrayNumero.push(0);
    else arrayNumero.push(1);

    arrayNumero.reverse();

    console.log('DECIMAL:')
    console.log(arrayNumero)
    console.log('----------------------')
}
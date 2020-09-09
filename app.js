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

    console.log('BINARIO PARA DECIMAL')
    console.log(decimal);
    console.log('----------------------')
}

function hexa(numbers) {
    let hexa = 0;
    
    console.log('HEXA PARA DECIMAL')
    
    let toHexa = numbers.map((num, i) => {
        let number = 16 ** i * num;

        console.log(`16^${i} x ${num} = ${number}`)

        return number;
    })

    toHexa.forEach(num => hexa += num);

    console.log(hexa);
    console.log('HEXA PARA Binario')
    decimal(hexa);
    console.log('----------------------')
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

    console.log('DECIMAL PARA BINARIO:')
    console.log(arrayNumero)
    console.log('----------------------')
}
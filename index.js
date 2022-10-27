const resultado = fizzBuzz(15);
console.log(resultado)

function fizzBuzz(entrada){
    switch (entrada) {

        case entrada % 3 === 0 :
            'Fizz'
            break;

        case entrada % 5 === 0 :
            'Buzz'
            break;

        case entrada % 3 === 0 && entrada % 5 === 0 :
            'FizzBuzz'
            break;

        case entrada % 3 !== 0 && entrada % 5 !== 0 :
            'não é divisivel nem por 3 e nem por 5'
            break;
        
        default:
            'não é um número'
    }
}

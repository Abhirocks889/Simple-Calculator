const calculator = require('./index');

test('Should create a basic calculator and return the value entered', () => {
    let calculate = calculator();
    expect(calculate('2')).toEqual('2');
});

test('Should perform basic addition and return the sum', () => {
    let calculate = calculator();
    calculate('2');
    calculate('+');
    calculate('3');
    expect(calculate('=')).toEqual(5);
});

test('Should perform basic subtraction and return the sum', () => {
    let calculate = calculator();
    calculate('2');
    calculate('4');
    calculate('5');
    calculate('-');
    calculate('3');
    calculate('2');
    expect(calculate('=')).toEqual(213);
});

test('Should perform basic division and return the sum', () => {
    let calculate = calculator();
    calculate('2');
    calculate('4');
    calculate('/');
    calculate('3');
    expect(calculate('=')).toEqual(8);
});

test('Should perform basic multiplication and return the sum', () => {
    let calculate = calculator();
    calculate('2');
    calculate('4');
    calculate('X');
    calculate('3');
    expect(calculate('=')).toEqual(72);
});

test('Should clear the result', () => {
    let calculate = calculator();
    calculate('2');
    calculate('4');
    calculate('X');
    calculate('3');
    expect(calculate('=')).toEqual(72);
    expect(calculate('CE')).toEqual('Result');
});
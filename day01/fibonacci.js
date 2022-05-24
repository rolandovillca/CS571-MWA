const fibonacci = function(number) {
    if (number<0) number = -number;
    if(number <= 2) {
        return 1;
    } else {
        return fibonacci(number-1) + fibonacci(number-2);
    }
}

module.exports = fibonacci;
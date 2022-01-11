module.exports = function toReadable (number) {
    let simpleUnits = ['', 'one', 'two', 'three', 'four', 'five' ,'six' ,'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let decimalsUnits = ['','', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
       if (number == 0) return 'zero';
       if (number <= 19) return simpleUnits[number];
       if (number >= 20 && number < 100){
           return (decimalsUnits[Math.trunc(number/10)] + ' ' + simpleUnits[number%10]).trim();
       }
    let countHundred = Math.trunc(number/100);
    let outputHundred = '';
    let outputDecimals = '';
       if (countHundred >= 1){
               outputHundred = simpleUnits[countHundred] + ' hundred';
               let remainder = number%100;
               if (remainder <= 19){
                   outputDecimals = ' ' + simpleUnits[remainder];
               }
               else {
                   outputDecimals = ' ' + decimalsUnits[Math.trunc(remainder/10)] + ' ' + simpleUnits[remainder%10];
               }
               let result = outputHundred + outputDecimals;
       return result.trim();
       }
}

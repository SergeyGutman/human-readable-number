module.exports = function toReadable (number) {
     let simpleUnits = ['', 'one', 'two', 'three', 'four', 'five' ,'six' ,'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
    'nineteen'];
    let complexUnits = ['','', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number <= 19) return simpleUnits[number];
    else if (number >= 20 && number < 100){
        let kres = String(number);
        let sum = complexUnits[kres[0]] + ' ' + simpleUnits[kres[1]];
        return sum;
    }
    else if (number >= 100){
        let hideDecimal = '';
        let kres = String(number);
        if (kres[1] != 0) hideDecimals = complexUnits[kres[1]] + ' ';
        let sum = simpleUnits[kres[0]] + ' ' + 'hundred ' + hideDecimals + simpleUnits[kres[2]];
        return sum;
    }
}

module.exports = function toReadable (number) {
     let simpleUnits = ['', 'one', 'two', 'three', 'four', 'five' ,'six' ,'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
    'nineteen'];
    let complexUnits = ['','', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number <= 19) return console.log(simpleUnits[number]);
    else if (number >= 20 && number < 100){
        let kres = String(number);
        return console.log(complexUnits[kres[0]] + ' ' + simpleUnits[kres[1]]);
    }
}

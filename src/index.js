const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let exprChar = '';
    let res = '';
    const convertStr = (str) => {
        let res = '';
        for (let i = 0; i < str.length; i += 2) {
            if (str[i] + str[i + 1] === '10') {
                res = res + '.';
            }
            else {
                res = res + '-';
            }
        }
        return res;
    }
    for (let i = 0; i < expr.length; i += 10) {
        if ( expr.slice(i, i + 10) === '**********' ) {
            res = res + ' ';
        }
        else {
            exprChar = String( Number(expr.slice(i, i + 10)) );
            res = res + MORSE_TABLE[convertStr(exprChar)];
        }
    }
    return res;
}

module.exports = {
    decode
}
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
    const charNumber = expr.length / 10;
    const arr = [];
    for (let i = 0; i < charNumber; i++) {
      const start = i * 10;
      const end = (i + 1) * 10;
      const subStr = expr.substring(start, end);
      arr.push(subStr);
    }
    const result = [];
    arr.forEach((codedChar) => {
      const charCodeArr = [];
      for (let i = 8; i >= 0; i -= 2) {
        const codeNumber = codedChar.substring(i, i + 2);
        if (codeNumber === '10') {
          charCodeArr.unshift('.');
        } else if (codeNumber === '11') {
          charCodeArr.unshift('-');
        } else if (codeNumber === '**') {
          charCodeArr.unshift(' ');
          break;
        } else {
          break;
        }
      }
      const morseCodedChar = charCodeArr.join('');
      if (morseCodedChar === ' ') {
        result.push(' ');
      } else {
        result.push(MORSE_TABLE[morseCodedChar]);
      }
    });
    return(result.join(''));
}

module.exports = {
    decode
}

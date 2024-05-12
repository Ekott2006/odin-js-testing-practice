const LOWERCASE_SHIFT = 'a'.charCodeAt(0);
const UPPERCASE_SHIFT = 'A'.charCodeAt(0);

export default function caesarCipher(text, shiftCount) {
  let word = '';
  const shift = shiftCount % 26; // Pre-calculate shift for efficiency

  for (const char of text) {
    const charCode = char.charCodeAt(0);
    if (charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0)) {
      word += String.fromCharCode((charCode - LOWERCASE_SHIFT + shift) % 26 + LOWERCASE_SHIFT);
    } else if (charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0)) {
      word += String.fromCharCode((charCode - UPPERCASE_SHIFT + shift) % 26 + UPPERCASE_SHIFT);
    } else {
      word += char;
    }
  }

  return word;
}


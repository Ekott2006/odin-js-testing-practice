import caesarCipher from '../lib/caesarCipher'; // Assuming your caesar_cipher function is in main.js

test('basic encryption', () => {
  expect(caesarCipher('HELLO', 3)).toBe('KHOOR');
});

test('basic encryption (lowercase)', () => {
  expect(caesarCipher('hello', 3)).toBe('khoor');
});

test('encryption with punctuation', () => {
  expect(caesarCipher('HELLO, WORLD!', 5)).toBe('MJQQT, BTWQI!');
});

test('encryption of sentence', () => {
  expect(caesarCipher('QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD', 3)).toBe('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG');
});

test('encryption of case sensitive word', () => {
  expect(caesarCipher('AbCdEfG', 10)).toBe('KlMnOpQ');
});

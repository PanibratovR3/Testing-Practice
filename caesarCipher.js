function newCharacter(letter, alphabet, shift) {
  let newCharacterIndex = (alphabet.indexOf(letter) + shift) % alphabet.length;
  return alphabet.charAt(newCharacterIndex);
}
function caesarCipher(string, shiftFactor) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let character of string) {
    let characterToEncode = character.toLowerCase();
    if (alphabet.includes(characterToEncode)) {
      let encodedCharacter = newCharacter(
        characterToEncode,
        alphabet,
        shiftFactor
      );
      encodedCharacter =
        character === character.toUpperCase()
          ? encodedCharacter.toUpperCase()
          : encodedCharacter;
      result += encodedCharacter;
    } else {
      result += character;
    }
  }
  return result;
}

export { caesarCipher };

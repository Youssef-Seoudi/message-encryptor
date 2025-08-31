// Input validation to allow only letters and numbers
document.getElementById('message').addEventListener('input', function(e) {
  this.value = this.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
});

// Caesar cipher based encryption and decryption on letters + digits (0-9 treated as characters)
function caesarCipher(text, shift) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return text.split('').map(char => {
    let idx = alphabet.indexOf(char);
    if (idx === -1) return char; // passthrough unknown chars (shouldn't happen)
    let newIndex = (idx + shift) % alphabet.length;
    return alphabet[newIndex];
  }).join('');
}

function encryptMessage() {
  const message = document.getElementById('message').value;
  const key = parseInt(document.getElementById('key-select').value);
  if (!message) {
    alert("Please enter a message to encrypt.");
    return;
  }
  const encrypted = caesarCipher(message, key);
  document.getElementById('encrypted-output').value = encrypted;
  document.getElementById('decrypted-output').value = '';
}

function decryptMessage() {
  const encrypted = document.getElementById('encrypted-output').value;
  const key = parseInt(document.getElementById('decrypt-key').value);
  if (!encrypted) {
    alert("No encrypted message to decrypt.");
    return;
  }
  if (!key || key < 1 || key > 10) {
    alert("Please enter a valid key between 1 and 10 for decryption.");
    return;
  }
  const decrypted = caesarCipher(encrypted, 36 - key);
  document.getElementById('decrypted-output').value = decrypted;
}

const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

checkBtn.addEventListener('click', checkPalindrome);

function checkPalindrome() {
  const enteredString = textInput.value;
  const cleanedString = cleanString(textInput.value);
  const resultString = isPolindrome(cleanedString, enteredString);
  showResult(resultString);
}

function cleanString(string) {
  const alphanumericString = string.replace(/[^a-zA-Z0-9]/gi, '');
  return alphanumericString.toLowerCase();
}

function isPolindrome(str, eStr) {
  if (str === '') {
    alert('Please input a value')
  } else if (str.length === 1) {
    return `<strong>${eStr}</strong> is a palindrome.`;
  } else if (str.length % 2 === 0) {
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - i - 1]) {
        return `<strong>${eStr}</strong> is not a palindrome.`;
      }
    }
    return `<strong>${eStr}</strong> is a palindrome.`;
  } else if (str.length % 2 === 1) {
    for (let i = 0; i < ((str.length / 2) - 0.5); i++) {
      if (str[i] !== str[str.length - i - 1]) {
        return `<strong>${eStr}</strong> is not a palindrome.`;
      }
    }
    return `<strong>${eStr}</strong> is a palindrome.`;
  }
}

function showResult(result) {
  let resultHTML = `<p class='user-input'>${result}</p>`;
  resultDiv.innerHTML = resultHTML;
  resultDiv.classList.remove('hidden');
}
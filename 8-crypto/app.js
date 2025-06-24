// Шифратор (переворачивает строку)
function encrypt(pwd) {
  return pwd.split('').reverse().join('');
}

// Дешифратор (аналогичный шифратору)
function decrypt(encrypted) {
  return encrypt(encrypted); // просто снова переворачиваем
}

// Функция проверки
function checkPassword(originalPwd, encryptedPwd) {
  return decrypt(encryptedPwd) === originalPwd;
}

// Пример использования:
const password = "Password";
const encrypted = encrypt(password); // "drowssaP"

console.log("Оригинал:", password);   
console.log("Зашифровано:", encrypted);
console.log(checkPassword(password, encrypted)); // true
console.log(checkPassword(password, "wrong"));   // false
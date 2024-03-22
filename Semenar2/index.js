// Функция для генерации случайного числа в диапазоне [min, max]
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Функция для генерации пароля
  function generatePassword(length = 12, options = {}) {
    const defaults = {
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
    };
  
    const mergedOptions = { ...defaults, ...options };
  
    let charset = '';
    if (mergedOptions.uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (mergedOptions.lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (mergedOptions.numbers) charset += '0123456789';
    if (mergedOptions.symbols) charset += '!@#$%^&*()-_+=<>?';
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = getRandomInt(0, charset.length - 1);
      password += charset[randomIndex];
    }
  
    return password;
  }
  
  module.exports = { generatePassword };
  
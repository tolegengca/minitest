const inputText = document.getElementById('input-text');
const sourceLanguage = document.getElementById('source-language');
const targetLanguage = document.getElementById('target-language');
const translateButton = document.getElementById('translate-button');
const translation = document.getElementById('translation');

translateButton.addEventListener('click', () => {
    const textToTranslate = inputText.value;
    const sourceLang = sourceLanguage.value;
    const targetLang = targetLanguage.value;

    // Замена этого места вашим вызовом API перевода
    // Пример с использованием Google Translate (вам понадобится ключ API Google Translate)
    fetch(`https://translation.googleapis.com/language/translate/v2?key=AIzaSyBfecLL4DC-kRVHvEwMoHhVcaxAsulCuYg&source=${sourceLang}&target=${targetLang}&q=${textToTranslate}`)
        .then(response => response.json())
        .then(data => {
            translation.value = data.data.translations[0].translatedText;
        })
        .catch(error => {
            console.error('Error translating:', error);
            // Обработка ошибки (например, отображение сообщения пользователю)
        });
});

// Проверка текущей темы
if (Telegram.WebApp.colorScheme === 'dark') {
    // Применение дополнительных стилей для темной темы, если необходимо
    console.log("Dark theme is active.");

    // Пример: сделать фон кнопки темнее
    translateButton.style.backgroundColor = "#333"; // Настроить цвет по желанию

    // Пример: изменить цвет текста для контраста
    translation.style.color = "white"; // Настроить цвет по желанию

} else {
    // Применение дополнительных стилей для светлой темы, если необходимо
    console.log("Light theme is active.");

    // Пример: сделать фон кнопки светлее
    translateButton.style.backgroundColor = "#007bff"; // Исходный цвет

    // Пример: изменить цвет текста для контраста
    translation.style.color = "black"; // Исходный цвет
}

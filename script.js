const inputText = document.getElementById('input-text');
const sourceLanguage = document.getElementById('source-language');
const targetLanguage = document.getElementById('target-language');
const translateButton = document.getElementById('translate-button');
const translation = document.getElementById('translation');

translateButton.addEventListener('click', () => {
    const textToTranslate = inputText.value;
    const sourceLang = sourceLanguage.value;
    const targetLang = targetLanguage.value;

    // Replace this with your actual translation API call
    // Example using Google Translate (you'll need a Google Translate API key)
    fetch(`https://translation.googleapis.com/language/translate/v2?key=AIzaSyBfecLL4DC-kRVHvEwMoHhVcaxAsulCuYg&source=${sourceLang}&target=${targetLang}&q=${textToTranslate}`)
        .then(response => response.json())
        .then(data => {
            translation.value = data.data.translations[0].translatedText;
        })
        .catch(error => {
            console.error('Error translating:', error);
            // Handle the error gracefully (e.g., display a message to the user)
        });
});
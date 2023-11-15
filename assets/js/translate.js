function googleTranslateElementInit() {

    new google.translate.TranslateElement(
        { pageLanguage: 'tr', includedLanguages: 'en,es,fr,de,ru', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
        'google_translate_element'
    );

    var supportedText = document.querySelector('.goog-logo-link span');
    if (supportedText) {
        supportedText.innerHTML = '';
    }
}
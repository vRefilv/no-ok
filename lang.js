// Get the browser's language
var browserLanguage = navigator.language || navigator.userLanguage;

// Check if the language is English or Polish
if (browserLanguage.toLowerCase().startsWith('en')) {
    window.location.href = '/en';
} else if (browserLanguage.toLowerCase().startsWith('pl')) {
    window.location.href = '/pl';
} else {
    window.location.href = '/en';
}

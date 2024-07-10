$(document).ready(function() {
    const lang = $('html').attr('lang'); // Get the language of the page

    const data = {
        en: {
            questions: [
                "Are you coming to the meeting?",
                "Can you finish the report?",
                "Can you pick up some groceries?",
                "Could you walk the dog?",
                "Can you answer the phone?"
            ],
            responses: [
                "Sure, I'll be there!",
                "Yes, I just finished it.",
                "Well, what do you need?",
                "Fine, but next time you will.",
                "Alright."
            ]
        },
        pl: {
            questions: [
                "Przyjdziesz na spotkanie?",
                "Czy mógłbyś skończyć raport?",
                "Możesz iść na zakupy?",
                "Mógłbyś iść z psem?",
                "Odbierzesz telefon?"
            ],
            responses: [
                "Oczywiście, będę tam.",
                "Pewnie, właśnie go skończyłem.",
                "Dobra, co potrzebujesz?",
                "Jasne, ale następnym razem ty idziesz.",
                "W porządku."
            ]
        }
    };

    // Select random index
    const randomIndex = Math.floor(Math.random() * data[lang].questions.length);

    // Update the text content using jQuery
    $('#dontDoThisText').text(data[lang].questions[randomIndex]);
    $('#dontDoThisResponse').text("ok");
    $('#tryThisText').text(data[lang].questions[randomIndex]);
    $('#tryThisResponse').text(data[lang].responses[randomIndex]);
});

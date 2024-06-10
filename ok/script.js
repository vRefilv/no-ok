$(document).ready(function() {
    function writeText() {
        $('#text').text('');
        $('#cursor').removeClass('blink').html('|');
        
        setTimeout(function() {
            $('#text').text('o');
            setTimeout(function() {
                $('#text').text('ok');
                $('#cursor').fadeIn(200, function() {
                    blinkCursor();
                });
            }, 500);
        }, 500);
    }

    function blinkCursor() {
        let blinks = 0;
        let blinkInterval = setInterval(function() {
            $('#cursor').fadeOut(200, function() {
                $(this).html($(this).html() === '|' ? '&nbsp;' : '|').fadeIn(200);
            });
            blinks++;
            if (blinks >= 6) { // 6 because it toggles 6 times for 3 blinks
                clearInterval(blinkInterval);
                $('#cursor').fadeIn(200).html('|'); // Ensure the cursor is visible after blinking
                reverseText();
            }
        }, 500);
    }

    function reverseText() {
        $('#cursor').removeClass('blink').html('|');
        
        setTimeout(function() {
            $('#text').text('o');
            setTimeout(function() {
                $('#text').text('|');
                writeText();
            }, 500);
        }, 500);
    }

    writeText();
});

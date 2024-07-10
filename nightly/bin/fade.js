$(document).ready(function() {
    // PC-specific behavior
    if ($(window).width() > 600) {
            var elements = $('.fade-element').not('footer');
            var delay = 500;
        
            // Sequential fade-in on page load
            elements.each(function(index) {
                $(this).delay(delay * index).queue(function(next) {
                    $(this).addClass('visible');
                    next();
                });
            });
        
            // Fade-in footer on scroll into view
            var footer = $('footer');
            function checkFooterVisibility() {
                var footerTop = footer.offset().top;
                var footerBottom = footerTop + footer.outerHeight();
                var windowTop = $(window).scrollTop();
                var windowBottom = windowTop + $(window).height();
        
                if (footerBottom > windowTop && footerTop < windowBottom) {
                    footer.addClass('visible');
                }
            }
        
            $(window).on('scroll', checkFooterVisibility);
            checkFooterVisibility(); // Trigger the function on page load in case the footer is initially visible
    }
    else {
    // mobile specific behavior
        var elements = $('.fade-element').not('footer').not('.examples');
        var delay = 500;
    
        // Sequential fade-in on page load
        elements.each(function(index) {
            $(this).delay(delay * index).queue(function(next) {
                $(this).addClass('visible');
                next();
            });
        });
    
        // Fade-in footer on scroll into view
        var footer = $('footer');
        function checkFooterVisibility() {
            var footerTop = footer.offset().top;
            var footerBottom = footerTop + footer.outerHeight();
            var windowTop = $(window).scrollTop();
            var windowBottom = windowTop + $(window).height();
    
            if (footerBottom > windowTop && footerTop < windowBottom) {
                footer.addClass('visible');
            }
        }
        var examples = $('.examples');
        function checkExamplesVisibility() {
            var examplesTop = examples.offset().top;
            var examplesBottom = examplesTop + examples.outerHeight();
            var windowTop = $(window).scrollTop();
            var windowBottom = windowTop + $(window).height();
    
            if (examplesBottom > windowTop && examplesTop < windowBottom) {
                examples.addClass('visible');
            }
        }
    
        $(window).on('scroll', checkFooterVisibility);
        $(window).on('scroll', checkExamplesVisibility);
        checkFooterVisibility(); // Trigger the function on page load in case the footer is initially visible
        checkExamplesVisibility();
    }
});

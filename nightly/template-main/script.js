$(document).ready(function () {
    // Check the hash in the URL on page load
    var initialHash = window.location.hash;
    if (initialHash) {
        // Remove the '#' character
        var linkvalue = initialHash.substring(1);

        // Check if the hash includes the search parameter
        if (linkvalue.startsWith('search=')) {
            var searchTerm = decodeURIComponent(linkvalue.substring('search='.length));
            // Trigger the search with the specified term
            performSearch(searchTerm);
        }
        // Check if the hash includes the section parameter
        else if (linkvalue.startsWith('section=')) {
            var sectionId = linkvalue.substring('section='.length);
            openContentbasedonhash(sectionId);
        }
    } else {
        // Initialize animations on page load without a specific section
        initializeAnimations();
    }

    // Toggle functionality for the side navbar
    $('#toggleSideNavbarButton').click(function () {
        var sideNavbar = $('.side-navbar');
        var mainContent = $('main');
        var content = $('.content');

        var sideNavbarLeft = parseInt(sideNavbar.css('left'));

        if (sideNavbarLeft === 0) {
            sideNavbar.animate({ left: '-150px' }, 500);
            mainContent.animate({ paddingLeft: '0' }, 500);

        } else {
            sideNavbar.animate({ left: '0' }, 500);
            mainContent.animate({ paddingLeft: '150' }, 500);
        }
    });

    // Click event for the side navbar links
    $('.side-navbar a').click(function () {
        var sectionId = $(this).data('section');
        toggleContentVisibility(sectionId);
    });

    // Function to initialize animations
    function initializeAnimations() {
        var sections = $('main section');

        // Initialize animations for each section
        sections.each(function () {
            var section = $(this);
            if (!section.is('#home')) {
                // Exclude the home section from being initially hidden
                section.addClass('hidden').css({ opacity: 0 });
            }
        });
    }

    // Toggle functionality for the search input
    var searchInputWrapper = $('.search-input-wrapper');
    var searchInput = $('#search-input');
    var searchButton = $('#search-button');

    $('.search-container').mouseleave(function () {
        // Fade out the search input and fade in the button
        searchInputWrapper.animate({ width: '0', opacity: 0 }, 250, function () {
            searchButton.animate({ opacity: 1 }, 250);
        });
    });

    $('.search-container').mouseenter(function () {
        // Fade out the button and fade in the search input
        searchButton.animate({ opacity: 0 }, 250, function () {
            searchInputWrapper.animate({ width: '200px', opacity: 1 }, 250);
        });
    });

    // Enter key press event for the search input
    searchInput.keypress(function (e) {
        if (e.which === 13) {
            // 13 is the key code for the Enter key
            var searchTerm = searchInput.val().toLowerCase();
            performSearch(searchTerm);
        }
    });





    function performSearch(searchTerm) {
        // Check if the search term is empty
        if (searchTerm.trim() === "") {
            // Clear previous highlights
            $('.highlighted').removeClass('highlighted');
            return;
        }
        // Update the URL hash to include the search term
        window.location.hash = 'search=' + encodeURIComponent(searchTerm);
    
        // Remove previous highlights
        $('.highlighted').removeClass('highlighted');
    
        // Split the search term into individual words
        var searchWords = searchTerm.toLowerCase().split(' ');
    
        // Loop through each section and check if it contains all search words consecutively
        $('main section').each(function () {
            var section = $(this);
            var sectionContent = section.text().toLowerCase(); // Convert to lowercase
    
            // Exclude settings tab from search
            if (section.attr('id') === 'settings') {
                return; // Skip this section
            }
    
            var containsAllWords = searchWords.every(function(word) {
                return sectionContent.includes(word);
            });
    
            if (containsAllWords) {
                // Highlight the matching text
                highlightText(section, searchTerm);
    
                // Fade out the current section
                section.stop(true, true).animate({ opacity: 0 }, 500, function () {
                    // After fade out, fade in the target section
                    section.removeClass('hidden').animate({ opacity: 1 }, 500);
                });
            } else {
                // Fade out other sections
                section.stop(true, true).animate({ opacity: 0 }, 500, function () {
                    // After fade out, hide and set opacity to 0
                    section.addClass('hidden').css({ opacity: 0 });
                });
            }
        });
    }
    
    

    function highlightText(section, searchTerm) {
        // Wrap each text node with a span for highlighting
        section.contents().each(function () {
            if (this.nodeType === 3) { // Node.TEXT_NODE
                var text = this.nodeValue;
                var regex = new RegExp('(' + searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ')', 'gi');
                var highlightedText = text.replace(regex, function (match) {
                    return '<span class="highlighted">' + match + '</span>';
                });
                $(this).replaceWith(highlightedText);
            } else if (this.nodeType === 1) { // Node.ELEMENT_NODE
                // Recursively apply highlighting to child elements
                highlightText($(this), searchTerm);
            }
        });
    }
    








    // Function to toggle visibility of content sections with fade-in and fade-out
    function toggleContentVisibility(sectionId) {
        var sections = $('main section');

        sections.each(function () {
            var section = $(this);
            if (section.attr('id') === sectionId){
                // Fade out the current section
                section.stop(true, true).animate({ opacity: 0 }, 500, function () {
                    // After fade out, fade in the target section
                    section.removeClass('hidden').animate({ opacity: 1 }, 500);
                });
            } else {
                // Fade out other sections
                section.stop(true, true).animate({ opacity: 0 }, 500, function () {
                    // After fade out, hide and set opacity to 0
                    section.addClass('hidden').css({ opacity: 0 });
                });
            }
        });
    }

    // Function to open the sidebar based on the hash in the URL
    function openContentbasedonhash(sectionId) {
        // Toggle visibility of content sections based on the hash
        toggleContentVisibility(sectionId);
    }

        // Add this inside the $(document).ready function

    // Function to handle text color picker change
    $('#txtcolor').on('input', function () {
        var textColor = $(this).val();
        // Implement logic to update text color based on textColor
        console.log('Text color changed to:', textColor);
        $("*").css("color", textColor);
    });
    // Function to handle text color picker change
    $('#fncolor').on('input', function () {
        var textColor = $(this).val();
        // Implement logic to update text color based on textColor
        console.log('Text color changed to:', textColor);
        $("nav, footer, .side-navbar").css("background-color", textColor);
    });
    // Function to handle text color picker change
    $('#iconscolor').on('input', function () {
        var textColor = $(this).val();
        // Implement logic to update text color based on textColor
        console.log('Text color changed to:', textColor);
        $("#search-button, .side-navbar-button").css("color", textColor);
    });
    // Function to handle text color picker change
    $('#bgcolor').on('input', function () {
        var textColor = $(this).val();
        // Implement logic to update text color based on textColor
        console.log('Text color changed to:', textColor);
        $("body").css("background-color", textColor);
    });

$(document).ready(function () {
    // ... (existing code)

    // Array to store presets
    var presets = [];

    // Save preset button click event
    $('button:contains("save preset")').click(function () {
        var presetName = $('#preset-input').val();
        if (presetName && presetName.trim() !== "") {
            // Save current color values as a preset
            var preset = {
                txtcolor: $('#txtcolor').val(),
                fncolor: $('#fncolor').val(),
                iconscolor: $('#iconscolor').val(),
                bgcolor: $('#bgcolor').val()
            };
            presets.push({ name: presetName, values: preset });
            updatePresetsDropdown();
        }
    });

    // Load preset button click event
    $('button:contains("load preset")').click(function () {
        var selectedPreset = $('#themes').val();
        if (selectedPreset) {
            // Load the selected preset
            var preset = presets.find(p => p.name === selectedPreset);
            if (preset) {
                applyPresetValues(preset.values);
            }
        }
    });

    // Delete preset button click event
    $('button:contains("delete preset")').click(function () {
        var selectedPreset = $('#themes').val();
        if (selectedPreset) {
            // Remove the selected preset
            presets = presets.filter(p => p.name !== selectedPreset);
            updatePresetsDropdown();
        }
    });

        // Load preset button click event
        $('button:contains("default preset")').click(function () {
            // Save current color values as a preset
            var preset = {
                txtcolor: "#c5c5c5",
                fncolor: "#1b1f2c",
                iconscolor: "#c5c5c5",
                bgcolor: "#161923"
            };
                    applyPresetValues(preset);
                }
);

    // Function to apply preset values
    function applyPresetValues(values) {
        $('#txtcolor').val(values.txtcolor).trigger('input');
        $('#fncolor').val(values.fncolor).trigger('input');
        $('#iconscolor').val(values.iconscolor).trigger('input');
        $('#bgcolor').val(values.bgcolor).trigger('input');
    }

    // Function to update presets dropdown
    function updatePresetsDropdown() {
        var dropdown = $('#themes');
        dropdown.empty();
        dropdown.append('<option value="" disabled selected hidden>Choose preset</option>');
        presets.forEach(function (preset) {
            dropdown.append('<option value="' + preset.name + '">' + preset.name + '</option>');
        });
    }

    // ... (existing code)
});




    // Add similar functions for other color pickers (footer, navbars, icons)
    // Function to handle theme change
    $('#theme,#theme1').change(function () {
        var theme = $(this).val();
        toggleTheme(theme);
        console.log(theme)
    });

    function toggleTheme(theme) {
        if (theme == 'dark') {
            console.log("black theme")
            // Apply dark theme
            $("*").removeClass('light-theme');
        } else if (theme == 'light') {
            console.log("white theme")
            // Apply light theme
            $("*").addClass('light-theme');
        }
    }
});

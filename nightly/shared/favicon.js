function updateFavicon(theme) {
        const favicon = document.getElementById('favicon');
        if (theme === 'dark') {
            favicon.href = 'https://no-ok.xyz/shared/crossed-ok-icon_white.webp';
        } else {
            favicon.href = 'https://no-ok.xyz/shared/crossed-ok-icon_black.webp';
        }
    }

    function setFavicon() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            updateFavicon('dark');
        } else {
            updateFavicon('light');
        }

        // Listen for changes in the color scheme preference
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (event.matches) {
                updateFavicon('dark');
            } else {
                updateFavicon('light');
            }
        });
    }

    // Call the function to set the favicon on page load
    setFavicon();

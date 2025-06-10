document.addEventListener('DOMContentLoaded', () => {
    // Hamburger-meny för mobil
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Stäng menyn när en länk klickas (på mobil)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Löpartips filterfunktion
    const tipCategoryButtons = document.querySelectorAll('.tip-category-btn');
    const tipItems = document.querySelectorAll('.tip-item');

    tipCategoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Ta bort 'active' från alla knappar
            tipCategoryButtons.forEach(btn => btn.classList.remove('active'));

            // Lägg till 'active' till den klickade knappen
            button.classList.add('active');

            const category = button.dataset.category; // Hämta kategorin från data-attribut

            tipItems.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block'; // Visa artikeln
                } else {
                    item.style.display = 'none'; // Dölj artikeln
                }
            });
        });
    });

    // Funktion för att ladda dynamiskt innehåll (placeholder)
    // I en riktig applikation skulle detta hämta data från en API eller databas
    function loadDynamicContent() {
        // Exempel: Laddar tips (inte aktivt i denna statiska version)
        // fetch('/api/tips')
        //     .then(response => response.json())
        //     .then(data => {
        //         const tipGrid = document.querySelector('.tip-grid');
        //         data.forEach(tip => {
        //             // Skapa HTML för varje tips och lägg till i tipGrid
        //         });
        //     });

        // Exempel: Laddar forumsinlägg (inte aktivt i denna statiska version)
        // fetch('/api/forum-posts')
        //     .then(response => response.json())
        //     .then(data => {
        //         const forumPlaceholder = document.querySelector('.forum-placeholder');
        //         // Skapa HTML för varje forumsinlägg
        //     });
    }

    loadDynamicContent(); // Anropa vid laddning av sidan
});
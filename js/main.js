window.onload = function() {
    // Atrodam hamburger pogu
    const menu_btn = document.querySelector('.hamburger');
    // Atrodam mobilo navigācijas izvēlni
    const mobile_menu = document.querySelector('.mobile-nav');

    // Pievienojam klikšķa notikumu klausītāju hamburger pogai
    menu_btn.addEventListener('click', function() {
        // Pārslēdzam 'is-active' klasi hamburger pogai
        menu_btn.classList.toggle('is-active');
        // Pārslēdzam 'is-active' klasi mobilajai navigācijas izvēlnei
        mobile_menu.classList.toggle('is-active');
    });
    
}
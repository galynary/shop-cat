;(() => {
    const refs = {
        openMenulBtn: document.querySelector('[data-menu-open]'),
        closeMenulBtn: document.querySelector('[data-menu-close]'),
        menu: document.querySelector('[data-menu]'),
        body: document.querySelector('[bodyl]'),
        menuNav: document.querySelector('[menu-nav]'),
    }

    refs.openMenu.Btn.addEventListener('click', toggleMenu)
    refs.closeMenu.Btn.addEventListener('click', toggleMenu)
    refs.menuNav.addEventListener('click', removeMenu)

    function toggleMenu() {
        refs.menu.classList.toggle('is-hidden')
        refs.body.classList.toggle('no-scroll')
    }
    function removeMenu() {
        refs.menu.classList.add('is-hidden')
    }
})()

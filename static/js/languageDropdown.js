const headerNavLanguageDropdown = document.querySelector('.header-nav-language-dropdown')
const headerNavDropdownButton = document.querySelector('.header-nav-dropdown-button')

let dropdownLanguageList = document.querySelector('.dropdown-language-list')
const headerNavArrowIcon = document.querySelector('.header-nav-arrow-icon')
const headerLogo = document.querySelector('.header-logo')

const headerNavLanguage = document.querySelector('.header-nav-language')

const dropdownItemButtons = document.querySelectorAll('.dropdown-item-button')

const dropdownLanguageItems = document.querySelectorAll('.dropdown-language-item')



headerNavLanguageDropdown.addEventListener('click', function() {
    console.log('dc,m dc edc ec, ec');
    headerNavArrowIcon.classList.toggle('active-dropdown-button')
    dropdownLanguageList.classList.toggle('active-dropdown')
    // dropdownLanguageList.style.display = 'block'
    
})

// dropdownItemButtons.forEach((dropdownItemButton) => {
//     dropdownItemButton.addEventListener('click', () => {
//         // headerNavArrowIcon.classList.toggle('active-dropdown-button')
//         toggleLanguageList()
//         headerNavLanguage.textContent = dropdownItemButton.textContent
//         // dropdownLanguageList.classList.toggle('active-dropdown')
//         // dropdownLanguageList.style.display = 'none'
//     })
// })

dropdownLanguageItems.forEach((dropdownLanguageItem) => {
    dropdownLanguageItem.addEventListener('click', () => {
        // headerNavArrowIcon.classList.toggle('active-dropdown-button')
        // toggleLanguageList()
        dropdownLanguageList.classList.remove('active-dropdown')
        headerNavLanguage.textContent = dropdownLanguageItem.textContent
        // dropdownLanguageList.classList.toggle('active-dropdown')
        // dropdownLanguageList.style.display = 'none'
    })
})

dropdownItemButtons.addEventListener('click', () => {
    toggleLanguageList()
})


function toggleLanguageList () {
    dropdownLanguageList.classList.toggle('active-dropdown')
    console.log('toggle language list');
}
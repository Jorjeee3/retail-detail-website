const headerNavLanguageDropdown = document.querySelector('.header-nav-language-dropdown')
const headerNavDropdownButton = document.querySelector('.header-nav-dropdown-button')

const dropdownLanguageList = document.querySelector('.dropdown-language-list')
const headerNavArrowIcon = document.querySelector('.header-nav-arrow-icon')
const headerLogo = document.querySelector('.header-logo')

const headerNavLanguage = document.querySelector('.header-nav-language')
const dropdownItemButtons = document.querySelectorAll('.dropdown-item-button')
const dropdownLanguageItems = document.querySelectorAll('.dropdown-language-item')



headerNavLanguageDropdown.addEventListener('click', function() {
    console.log('dc,m dc edc ec, ec');
    headerNavArrowIcon.classList.toggle('active-dropdown-button')
    dropdownLanguageList.classList.toggle('active-dropdown')
    
})

dropdownLanguageItems.forEach((dropdownLanguageItem) => {
    dropdownLanguageItem.addEventListener('click', () => {
        headerNavLanguage.textContent = dropdownLanguageItem.textContent
    })
    dropdownLanguageList.classList.toggle('active-dropdown')
})

function toggleLanguageList () {
    dropdownLanguageList.classList.toggle('active-dropdown')
    console.log('toggle language list');
}




// --------------------------------------------------------------------------------

const headerNavLanguageDropdownMobile = document.querySelector('.header-nav-language-dropdown-mobile')
const headerNavDropdownButtonMobile = document.querySelector('.header-nav-dropdown-button-mobile')

const dropdownLanguageListMobile = document.querySelector('.dropdown-language-list-mobile')
const headerNavArrowIconMobile = document.querySelector('.header-nav-arrow-icon-mobile')
const headerLogoMobile = document.querySelector('.header-logo-mobile')

const headerNavLanguageMobile = document.querySelector('.header-nav-language-mobile')
const dropdownItemButtonsMobile = document.querySelectorAll('.dropdown-item-button-mobile')
const dropdownLanguageItemsMobile = document.querySelectorAll('.dropdown-language-item-mobile')



headerNavLanguageDropdownMobile.addEventListener('click', function() {
    console.log('dc,m dc edc ec, ec');
    headerNavArrowIconMobile.classList.toggle('active-dropdown-button')
    dropdownLanguageListMobile.classList.toggle('active-dropdown')
    
})

dropdownLanguageItemsMobile.forEach((dropdownLanguageItem) => {
    dropdownLanguageItem.addEventListener('click', () => {
        headerNavLanguageMobile.textContent = dropdownLanguageItem.textContent
    })
    dropdownLanguageListMobile.classList.toggle('active-dropdown')
})

function toggleLanguageList () {
    dropdownLanguageListMobile.classList.toggle('active-dropdown')
    console.log('toggle language list');
}


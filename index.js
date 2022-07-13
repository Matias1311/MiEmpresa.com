function closeBanner () {
    banner.style.display = "none";
}
var referencesAreExpanded = true;
function expandReferences () {
    if (referencesAreExpanded) {
        referencesImg.style.cssText += "-webkit-transform:rotate(180deg);-moz-transform: rotate(180deg);-ms-transform: rotate(180deg);-o-transform: rotate(180deg);transform: rotate(180deg);";
        referencesCont.style.display = "block";
    }
    else {
        referencesImg.style.cssText -= "-webkit-transform:rotate(180deg);-moz-transform: rotate(180deg);-ms-transform: rotate(180deg);-o-transform: rotate(180deg);transform: rotate(180deg);";
        referencesCont.style.display = "none";
    }

    referencesAreExpanded = !referencesAreExpanded;
}
var menuIsExpanded = true;
function menuMobAnimation () {
    if (menuIsExpanded) {
        menuMob.classList.remove("menu-mob-out");
        menuMob.classList.add("menu-mob-in");
        menuIconOpen.classList.remove("menu-icon-open-out");
        menuIconOpen.classList.add("menu-icon-open-in");
        menuIconClose.classList.remove("menu-icon-close-out");
        menuIconClose.classList.add("menu-icon-close-in");
    }
    else {
        menuMob.classList.remove("menu-mob-in");
        menuMob.classList.add("menu-mob-out")
        menuIconClose.classList.remove("menu-icon-close-in");
        menuIconClose.classList.add("menu-icon-close-out");
        setTimeout (function () {
            menuIconOpen.classList.remove("menu-icon-open-in");
            menuIconOpen.classList.add("menu-icon-open-out");
        }, 500)
    }
    menuIsExpanded = !menuIsExpanded;
}
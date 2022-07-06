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
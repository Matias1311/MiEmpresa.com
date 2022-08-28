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
function formChange(display) {
    initial.style.display = "none";
    platform.style.display = "none";
    program.style.display = "none";

    switch (display) {
        case "initial":
            initial.style.display = "block";
            break;
        case "platform":
            platform.style.display = "block";
            break;
        case "program":
            program.style.display = "block";
            break;
    }
}
formChange("initial");

var selectorInfo = {
    logo: {
        title: "l",
        p: ""
    },
    headerContent: {
        title: "",
        p: ""
    },
    contact: {
        title: "",
        p: ""
    },
    simg: {
        title: "",
        p: ""
    },
    info: {
        title: "",
        p: ""
    },
    products: {
        title: "",
        p: ""
    },
    sbimg: {
        title: "",
        p: ""
    },
    sbanner: {
        title: "",
        p: ""
    },
    demoFooter: {
        title: "",
        p: ""
    }
};
function isOffScreen (el) {
    var rect = el.getBoundingClientRect();
    return (
            rect.top < 0
            || rect.left < 0
            || rect.bottom > (window.innerHeight || document.documentElement.clientHeight)
            || rect.right > (window.innerWidth || document.documentElement.clientWidth)
           );
}
const desktopClick = "<br>Haz clic de nuevo para obtener más información.";
const mobileTouch = "<br>Pulsa de nuevo para obtener más información";
let selector = document.getElementById('selector');
let selTitle = document.getElementById('selTitle');
let selP = document.getElementById('selP');
var isHovering = false;
var isInSelector = false;
var currentInfo;
var checkOffScreen = true;
const onMouseMove = (e) => {
    if (isHovering || isInSelector) {
        switch (currentInfo) {
            case "logo":
                selTitle.innerHTML = selectorInfo.logo.title
                selP.innerHTML = selectorInfo.logo.p
                break;
            case "headerContent":
                selTitle.innerHTML = selectorInfo.headerContent.title
                selP.innerHTML = selectorInfo.headerContent.p
                break;
            case "contact":
                selTitle.innerHTML = selectorInfo.contact.title
                selP.innerHTML = selectorInfo.contact.p
                break;
            case "simg":
                selTitle.innerHTML = selectorInfo.simg.title
                selP.innerHTML = selectorInfo.simg.p
                break;
            case "info":
                selTitle.innerHTML = selectorInfo.info.title
                selP.innerHTML = selectorInfo.info.p
                break;
            case "products":
                selTitle.innerHTML = selectorInfo.products.title
                selP.innerHTML = selectorInfo.products.p
                break;
            case "sbimg":
                selTitle.innerHTML = selectorInfo.sbimg.title
                selP.innerHTML = selectorInfo.sbimg.p
                break;
            case "sbanner":
                selTitle.innerHTML = selectorInfo.sbanner.title
                selP.innerHTML = selectorInfo.sbanner.p
                break;
            case "demoFooter":
                selTitle.innerHTML = selectorInfo.demoFooter.title
                selP.innerHTML = selectorInfo.demoFooter.p
                break;
        }
        selector.style.animationDuration = "0.15s"
        selector.classList.remove("menu-icon-open-in");
        selector.classList.add("menu-icon-open-out");
        if (selector.style.display == "none") {
            checkOffScreen = true;
        }
        selector.style.display = "block";
        if (isOffScreen(selector) && checkOffScreen) {
            selector.style.transform = "scaleX(-1)";
            checkOffScreen = false;
        }
        if (!isOffScreen(selector) && checkOffScreen) {
            selector.style.transform = "scaleX(1)";
            checkOffScreen = false;
        }
        if (selector.style.transform == "scaleX(-1)") {
            selector.style.left = e.pageX + 'px';
            selector.style.top = 'calc(' + e.pageY + 'px - 8vh - 16px)';
        }
        if (selector.style.transform == "scaleX(1)" || selector.style.transform == "") {
            selector.style.left = 'calc(' + e.pageX + 'px - 20vw)';
            selector.style.top = 'calc(' + e.pageY + 'px - 8vh - 16px)';
        }
    }
    else if(!isHovering && !isInSelector) {
        selector.style.animationDuration = "0.1s"
        selector.classList.remove("menu-icon-open-out");
        selector.classList.add("menu-icon-open-in");
        setTimeout(() => {
            selector.style.display = "none";
            selector.style.transform = "scaleX(1)";

            checkOffScreen = true;
        }, 100)
    }
}
onMouseMove();
document.addEventListener('mousemove', onMouseMove);








logo.addEventListener('mouseleave', function () {
    isHovering = false;
}, false)
logo.addEventListener('mouseover', function () {
    isHovering = true;
    currentInfo = "logo";
}, false)
headerContent.addEventListener('mouseleave', function () {
    isHovering = false;
}, false)
headerContent.addEventListener('mouseover', function () {
    isHovering = true;
    currentInfo = "headerContent";
}, false)
contact.addEventListener('mouseleave', function () {
    isHovering = false;
}, false)
contact.addEventListener('mouseover', function () {
    isHovering = true;
    currentInfo = "contact";
}, false)
let simg = document.getElementById("simg");
simg.addEventListener('mouseleave', function () {
    isHovering = false;
}, false)
simg.addEventListener('mouseover', function () {
    isHovering = true;
    currentInfo = "simg";
}, false)
let sbimg = document.getElementById("sbimg");
sbimg.addEventListener('mouseleave', function () {
    isHovering = false;
}, false)
sbimg.addEventListener('mouseover', function () {
    isHovering = true;
    currentInfo = "sbimg";
}, false)
info.addEventListener('mouseleave', function () {
    isHovering = false;
}, false)
info.addEventListener('mouseover', function () {
    isHovering = true;
    currentInfo = "info";
}, false)
products.addEventListener('mouseleave', function () {
    isHovering = false;
}, false)
products.addEventListener('mouseover', function () {
    isHovering = true;
    currentInfo = "products";
}, false)
sbanner.addEventListener('mouseleave', function () {
    isHovering = false;
}, false)
sbanner.addEventListener('mouseover', function () {
    isHovering = true;
    currentInfo = "sbanner";
}, false)
let demoFooter = document.getElementById("demoFooter");
demoFooter.addEventListener('mouseleave', function () {
    isHovering = false;
}, false)
demoFooter.addEventListener('mouseover', function () {
    isHovering = true;
    currentInfo = "demoFooter";
}, false)
selector.addEventListener('mouseleave', function () {
    isInSelector = false;
}, false)
selector.addEventListener('mouseover', function () {
    isInSelector = true;
}, false)
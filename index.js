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
        title: "Logo",
        p: "Crea tu logo. "
    },
    headerContent: {
        title: "Barra de Navegación",
        p: "Debe ser simple y rápida. "
    },
    contact: {
        title: "Información de Contacto",
        p: "Asegura ventas y chatea. "
    },
    simg: {
        title: "Imágenes",
        p: "Llama la atención. "
    },
    info: {
        title: "Información de tu Empresa",
        p: "Haz que te conozcan. "
    },
    products: {
        title: "Productos",
        p: "Vende con texto e imágenes. "
    },
    sbimg: {
        title: "Imágenes",
        p: "Llama la atención. "
    },
    sbanner: {
        title: "Banner",
        p: "Haz que tus clientes actúen. "
    },
    demoFooter: {
        title: "Pie de Página",
        p: "Añade información. "
    }
};
const desktopClick = "Haz clic para ver.";
const mobileTouch = "Pulsa para ver.";
let selector = document.getElementById('selector');
let arrow = document.getElementById('arrow');
let selTitle = document.getElementById('selTitle');
let selP = document.getElementById('selP');
var isHovering = false;
var isInSelector = false;
var currentInfo;
let pageSpace = 16;
let isMobile = false;
const onMouseMove = (e) => {
    if (isHovering || isInSelector) {
        switch (currentInfo) {
            case "logo":
                selTitle.innerHTML = selectorInfo.logo.title;
                selP.innerHTML = selectorInfo.logo.p + desktopClick;
                break;
            case "headerContent":
                selTitle.innerHTML = selectorInfo.headerContent.title;
                selP.innerHTML = selectorInfo.headerContent.p + desktopClick;
                break;
            case "contact":
                selTitle.innerHTML = selectorInfo.contact.title;
                selP.innerHTML = selectorInfo.contact.p + desktopClick;
                break;
            case "simg":
                selTitle.innerHTML = selectorInfo.simg.title;
                selP.innerHTML = selectorInfo.simg.p + desktopClick;
                break;
            case "info":
                selTitle.innerHTML = selectorInfo.info.title;
                selP.innerHTML = selectorInfo.info.p + desktopClick;
                break;
            case "products":
                selTitle.innerHTML = selectorInfo.products.title;
                selP.innerHTML = selectorInfo.products.p + desktopClick;
                break;
            case "sbimg":
                selTitle.innerHTML = selectorInfo.sbimg.title;
                selP.innerHTML = selectorInfo.sbimg.p + desktopClick;
                break;
            case "sbanner":
                selTitle.innerHTML = selectorInfo.sbanner.title;
                selP.innerHTML = selectorInfo.sbanner.p + desktopClick;
                break;
            case "demoFooter":
                selTitle.innerHTML = selectorInfo.demoFooter.title;
                selP.innerHTML = selectorInfo.demoFooter.p + desktopClick;
                break;
        }
        selector.style.animationDuration = "0.15s"
        selector.classList.remove("menu-icon-open-in");
        selector.classList.add("menu-icon-open-out");
        selector.style.display = "block";
        if (arrow.getBoundingClientRect().left + (arrow.getBoundingClientRect().width / 2) + pageSpace < selector.getBoundingClientRect().width) {
            selector.style.transform = "scaleX(-1)";
            selTitle.style.transform = "scaleX(-1)";
            selP.style.transform = "scaleX(-1)"
        }
        else if (arrow.getBoundingClientRect().left + (arrow.getBoundingClientRect().width / 2) - pageSpace > selector.getBoundingClientRect().width){
            selector.style.transform = "scaleX(1)";
            selTitle.style.transform = "scaleX(1)";
            selP.style.transform = "scaleX(1)";
        }
        if (selector.style.transform == "scaleX(-1)") {
            selector.style.left = e.pageX + 'px';
            selector.style.top = 'calc(' + e.pageY + 'px - 8vh - 16px)';
        }
        if (selector.style.transform == "scaleX(1)" || selector.style.transform == "") {
            selector.style.left = 'calc(' + e.pageX + 'px - 36vw - 16px)';
            selector.style.top = 'calc(' + e.pageY + 'px - 8vh - 16px)';
        }
    }
    else if(!isHovering && !isInSelector) {
        selector.style.animationDuration = "0.1s"
        setTimeout(() => {
            selector.classList.remove("menu-icon-open-out");
            selector.classList.add("menu-icon-open-in");
        }, 50)
        setTimeout(() => {
            selector.style.display = "none";
            selector.style.transform = "scaleX(1)";

        }, 100)
    }
}
onMouseMove();
if (!isMobile) {
    document.addEventListener('mousemove', onMouseMove);
}
const onTouch = (e) => {
    isMobile = true;
    if (isHovering || isInSelector) {
        switch (currentInfo) {
            case "logo":
                selTitle.innerHTML = selectorInfo.logo.title;
                selP.innerHTML = selectorInfo.logo.p + mobileTouch;
                break;
            case "headerContent":
                selTitle.innerHTML = selectorInfo.headerContent.title;
                selP.innerHTML = selectorInfo.headerContent.p + mobileTouch;
                break;
            case "contact":
                selTitle.innerHTML = selectorInfo.contact.title;
                selP.innerHTML = selectorInfo.contact.p + mobileTouch;
                break;
            case "simg":
                selTitle.innerHTML = selectorInfo.simg.title;
                selP.innerHTML = selectorInfo.simg.p + mobileTouch;
                break;
            case "info":
                selTitle.innerHTML = selectorInfo.info.title;
                selP.innerHTML = selectorInfo.info.p + mobileTouch;
                break;
            case "products":
                selTitle.innerHTML = selectorInfo.products.title;
                selP.innerHTML = selectorInfo.products.p + mobileTouch;
                break;
            case "sbimg":
                selTitle.innerHTML = selectorInfo.sbimg.title;
                selP.innerHTML = selectorInfo.sbimg.p + mobileTouch;
                break;
            case "sbanner":
                selTitle.innerHTML = selectorInfo.sbanner.title;
                selP.innerHTML = selectorInfo.sbanner.p + mobileTouch;
                break;
            case "demoFooter":
                selTitle.innerHTML = selectorInfo.demoFooter.title;
                selP.innerHTML = selectorInfo.demoFooter.p + mobileTouch;
                break;
        }
        selector.style.animationDuration = "0.15s"
        selector.classList.remove("menu-icon-open-in");
        selector.classList.add("menu-icon-open-out");
        selector.style.display = "block";
        if (arrow.getBoundingClientRect().left + (arrow.getBoundingClientRect().width / 2) + pageSpace < selector.getBoundingClientRect().width) {
            selector.style.transform = "scaleX(-1)";
        }
        else if (arrow.getBoundingClientRect().left + (arrow.getBoundingClientRect().width / 2) - pageSpace > selector.getBoundingClientRect().width){
            selector.style.transform = "scaleX(1)";
        }
        if (selector.style.transform == "scaleX(-1)") {
            selector.style.left = e.touches[0].clientX + 'px';
            selector.style.top = 'calc(' + e.touches[0].clientY + 'px - 8vh - 16px)';
        }
        if (selector.style.transform == "scaleX(1)" || selector.style.transform == "") {
            selector.style.left = 'calc(' + e.touches[0].clientX + 'px - 20vw)';
            selector.style.top = 'calc(' + e.touches[0].clientY + 'px - 8vh - 16px)';
        }
    }
    else if(!isHovering && !isInSelector) {
        selector.style.animationDuration = "0.1s"
        setTimeout(() => {
            selector.classList.remove("menu-icon-open-out");
            selector.classList.add("menu-icon-open-in");
        }, 50)
        setTimeout(() => {
            selector.style.display = "none";
            selector.style.transform = "scaleX(1)";

        }, 100)
    }
}
document.addEventListener('touchstart', onTouch);

document.getElementById("timeInput").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100;
    this.style.background = 'linear-gradient(to right, var(--primary-color) 0%, var(--primary-color) ' + value + '%, #fff ' + value + '%, white 100%)';
  };




logo.addEventListener('mouseleave', function () {
    isHovering = false;
}, false)
logo.addEventListener('mouseover', function () {
    isHovering = true;
    currentInfo = "logo";
}, false)
logo.addEventListener('touchstart', function () {
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
headerContent.addEventListener('touchstart', function () {
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
contact.addEventListener('touchstart', function () {
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
simg.addEventListener('touchstart', function () {
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
sbimg.addEventListener('touchstart', function () {
    isHovering = true;
    currentInfo = "sbimg";
}, false)
let info = document.getElementById('info');
info.addEventListener('mouseleave', function () {
    isHovering = false;
}, false)
info.addEventListener('mouseover', function () {
    isHovering = true;
    currentInfo = "info";
}, false)
info.addEventListener('touchstart', function () {
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
products.addEventListener('touchstart', function () {
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
sbanner.addEventListener('touchstart', function () {
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
demoFooter.addEventListener('touchstart', function () {
    isHovering = true;
    currentInfo = "demoFooter";
}, false)
selector.addEventListener('mouseleave', function () {
    isInSelector = false;
}, false)
selector.addEventListener('mouseover', function () {
    isInSelector = true;
}, false)
selector.addEventListener('touchstart', function () {
    isInSelector = true;
}, false)
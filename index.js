function closeBanner () {
    document.getElementById("banner").style.right = "0";
    document.getElementById("banner").style.animation = "hide 0.5s ease 0s 1 normal forwards";
    setTimeout(() => {
        bannerShow.style.display = "block";
        banner.style.display = "none";
    }, 500)
}
function showBanner() {
    banner.style.animation = "slide-left 1.5s ease 0s 1 normal forwards";
    banner.style.right = "-440px"
    banner.style.display = "block";
    bannerShow.style.display = "none";
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
    tips.style.display = "none";

    switch (display) {
        case "initial":
            initial.style.display = "block";
            break;
        case "tips":
            tips.style.display = "block";
            setTimeout(() => {
                tenVideo.play();
            }, 500)
            break;
    }
}
let displayInputHelp = 2;
let value;
function updateMain(e) {
    value = Math.round((e.value-e.min)/(e.max-e.min)*100);
    e.style.background = 'linear-gradient(to right, var(--secondary-color) 0%, var(--secondary-color) ' + value + '%, #fff ' + value + '%, white 100%)';
    console.log(value);
    if (displayInputHelp > 0) {
        document.querySelector(".mainContent").style.display = "flex";
        displayInputHelp--;
    }
    if(displayInputHelp === 0) {
        document.querySelector("#timeContainer>h3").style.display = "none";
        displayInputHelp--;
    }
    if (0 <= value && value <= 25) {
        document.getElementById("store").style.display = "block";
        document.getElementById("template").style.display = "none";
        document.getElementById("program").style.display = "none";

        document.querySelector("#mainButtonList button:first-child").style.display = "none";
        displayButton(document.querySelector("#mainButtonList button:nth-child(2)"), 2);
    }
    else if (26 <= value && value <= 75) {
        document.getElementById("store").style.display = "none";
        document.getElementById("template").style.display = "block";
        document.getElementById("program").style.display = "none";

        document.querySelector("#mainButtonList button:first-child").style.display = "none";
        displayButton(document.querySelector("#mainButtonList button:nth-child(2)"), 2);
    }
    else if (76 <= value && value <= 100) {
        document.getElementById("store").style.display = "none";
        document.getElementById("template").style.display = "none";
        document.getElementById("program").style.display = "block";

        document.querySelector("#mainButtonList button:first-child").style.display = "block";
        displayButton(document.querySelector("#mainButtonList button:first-child"), 1);
    }
};
document.getElementById("timeInput").addEventListener("mouseup", showTips)
document.getElementById("timeInput").addEventListener("touchend", showTips)
document.getElementById("timeInput").addEventListener("touchcancel", showTips)

let firstTips = true;
function showTips() {
    document.getElementById("mainTips").setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.body.classList.toggle("noscroll");
    document.getElementById("timeInput").removeEventListener("mouseup", showTips);
    document.getElementById("timeInput").removeEventListener("touchend", showTips);
    document.getElementById("timeInput").removeEventListener("touchcancel", showTips);
    document.getElementById("mainTips").style.display = "grid";
    document.getElementById("mainTips").style.animation = "show 1s ease 0s 1 normal forwards";
    document.querySelector("#mainTips video").currentTime = 0;
    document.querySelector("#mainTips video").play();
    if (firstTips == false) {
        document.querySelector("#mainTipsContainer h3").innerHTML = "Revísalos cuando quieras:"
    }
}
function hideTips() {
    document.getElementById("mainTips").style.animation = "hide 1s ease 0s 1 normal forwards";
    document.body.style.overflow = "auto";
    document.body.classList.toggle("noscroll");
    setTimeout(() => {
        document.getElementById("mainTips").style.display = "none";
        document.getElementById("tipsShow").style.display = "block";
        document.getElementById("mainTips").setAttribute("aria-hidden", "true");
    }, 1000)
    firstTips = false;
}

function displayButton(button, buttonNumber) {
    button.style.backgroundColor = "var(--secondary-color)";
    document.querySelectorAll("#mainButtonList button:not(:nth-child(" + buttonNumber + ")").forEach((e) => {
        e.style.backgroundColor = "var(--primary-color)";
    });
    switch (buttonNumber) {
        case 1:
            pButtonList.style.display = "flex";
            dButtonList.style.display = "none";
            cButtonList.style.display = "none";
            vButtonList.style.display = "none";
            pGrid.style.display = "block";
            dGrid.style.display = "none";
            cGrid.style.display = "none";
            vGrid.style.display = "none";

            changeGrid(document.querySelector("#pButtonList button:first-child"), 1);
            break;
        case 2:
            pButtonList.style.display = "none";
            dButtonList.style.display = "flex";
            cButtonList.style.display = "none";
            vButtonList.style.display = "none";
            pGrid.style.display = "none";
            dGrid.style.display = "block";
            cGrid.style.display = "none";
            vGrid.style.display = "none";
            changeGrid(document.querySelector("#dButtonList button:first-child"), 1);
            break;
        case 3:
            pButtonList.style.display = "none";
            dButtonList.style.display = "none";
            cButtonList.style.display = "flex";
            vButtonList.style.display = "none";
            pGrid.style.display = "none";
            dGrid.style.display = "none";
            cGrid.style.display = "block";
            vGrid.style.display = "none";
            changeGrid(document.querySelector("#cButtonList button:first-child"), 1);
            break;
        case 4:
            pButtonList.style.display = "none";
            dButtonList.style.display = "none";
            cButtonList.style.display = "none";
            vButtonList.style.display = "flex";
            pGrid.style.display = "none";
            dGrid.style.display = "none";
            cGrid.style.display = "none";
            vGrid.style.display = "block";
            changeGrid(document.querySelector("#vButtonList button:first-child"), 1);
            break;
        default:
            console.error("INVALID SWITCH ARGUMENT");
            break;                
    }
}

function changeGrid(button, gridNumber) {
    document.getElementById(button.parentNode.id.charAt(0) + "Grid").style.display = "block";
    document.querySelector("#" + (button.parentNode.id.charAt(0)) + gridNumber).style.display = "flex";
    document.querySelectorAll("#" + (button.parentNode.id.charAt(0) + "Grid") + ">div:not(:nth-child(" + gridNumber + ")").forEach ((e) => {
        e.style.display = "none";
    });
    button.style.backgroundColor = "var(--secondary-color)";
    document.querySelectorAll("#" + button.parentNode.id.charAt(0) + "ButtonList button:not(:nth-child(" + gridNumber + ")").forEach((e) => {
        e.style.backgroundColor = "var(--primary-color)";
    });
}


// var selectorInfo = {
//     logo: {
//         title: "Logo",
//         p: "Crea tu logo. "
//     },
//     headerContent: {
//         title: "Barra de Navegación",
//         p: "Debe ser simple y rápida. "
//     },
//     contact: {
//         title: "Información de Contacto",
//         p: "Asegura ventas y chatea. "
//     },
//     simg: {
//         title: "Imágenes",
//         p: "Llama la atención. "
//     },
//     info: {
//         title: "Información de tu Empresa",
//         p: "Haz que te conozcan. "
//     },
//     products: {
//         title: "Productos",
//         p: "Vende con texto e imágenes. "
//     },
//     sbimg: {
//         title: "Imágenes",
//         p: "Llama la atención. "
//     },
//     sbanner: {
//         title: "Banner",
//         p: "Haz que tus clientes actúen. "
//     },
//     demoFooter: {
//         title: "Pie de Página",
//         p: "Añade información. "
//     }
// };
// const desktopClick = "Haz clic para ver.";
// const mobileTouch = "Pulsa para ver.";
// let selector = document.getElementById('selector');
// let arrow = document.getElementById('arrow');
// let selTitle = document.getElementById('selTitle');
// let selP = document.getElementById('selP');
// var isHovering = false;
// var isInSelector = false;
// var currentInfo;
// let pageSpace = 16;
// let isMobile = false;
// const onMouseMove = (e) => {
//     if (isHovering || isInSelector) {
//         switch (currentInfo) {
//             case "logo":
//                 selTitle.innerHTML = selectorInfo.logo.title;
//                 selP.innerHTML = selectorInfo.logo.p + desktopClick;
//                 break;
//             case "headerContent":
//                 selTitle.innerHTML = selectorInfo.headerContent.title;
//                 selP.innerHTML = selectorInfo.headerContent.p + desktopClick;
//                 break;
//             case "contact":
//                 selTitle.innerHTML = selectorInfo.contact.title;
//                 selP.innerHTML = selectorInfo.contact.p + desktopClick;
//                 break;
//             case "simg":
//                 selTitle.innerHTML = selectorInfo.simg.title;
//                 selP.innerHTML = selectorInfo.simg.p + desktopClick;
//                 break;
//             case "info":
//                 selTitle.innerHTML = selectorInfo.info.title;
//                 selP.innerHTML = selectorInfo.info.p + desktopClick;
//                 break;
//             case "products":
//                 selTitle.innerHTML = selectorInfo.products.title;
//                 selP.innerHTML = selectorInfo.products.p + desktopClick;
//                 break;
//             case "sbimg":
//                 selTitle.innerHTML = selectorInfo.sbimg.title;
//                 selP.innerHTML = selectorInfo.sbimg.p + desktopClick;
//                 break;
//             case "sbanner":
//                 selTitle.innerHTML = selectorInfo.sbanner.title;
//                 selP.innerHTML = selectorInfo.sbanner.p + desktopClick;
//                 break;
//             case "demoFooter":
//                 selTitle.innerHTML = selectorInfo.demoFooter.title;
//                 selP.innerHTML = selectorInfo.demoFooter.p + desktopClick;
//                 break;
//         }
//         selector.style.animationDuration = "0.15s"
//         selector.classList.remove("menu-icon-open-in");
//         selector.classList.add("menu-icon-open-out");
//         selector.style.display = "block";
//         if (arrow.getBoundingClientRect().left + (arrow.getBoundingClientRect().width / 2) + pageSpace < selector.getBoundingClientRect().width) {
//             selector.style.transform = "scaleX(-1)";
//             selTitle.style.transform = "scaleX(-1)";
//             selP.style.transform = "scaleX(-1)"
//         }
//         else if (arrow.getBoundingClientRect().left + (arrow.getBoundingClientRect().width / 2) - pageSpace > selector.getBoundingClientRect().width){
//             selector.style.transform = "scaleX(1)";
//             selTitle.style.transform = "scaleX(1)";
//             selP.style.transform = "scaleX(1)";
//         }
//         if (selector.style.transform == "scaleX(-1)") {
//             selector.style.left = e.pageX + 'px';
//             selector.style.top = 'calc(' + e.pageY + 'px - 8vh - 16px)';
//         }
//         if (selector.style.transform == "scaleX(1)" || selector.style.transform == "") {
//             selector.style.left = 'calc(' + e.pageX + 'px - 36vw - 16px)';
//             selector.style.top = 'calc(' + e.pageY + 'px - 8vh - 16px)';
//         }
//     }
//     else if(!isHovering && !isInSelector) {
//         selector.style.animationDuration = "0.1s"
//         setTimeout(() => {
//             selector.classList.remove("menu-icon-open-out");
//             selector.classList.add("menu-icon-open-in");
//         }, 50)
//         setTimeout(() => {
//             selector.style.display = "none";
//             selector.style.transform = "scaleX(1)";

//         }, 100)
//     }
// }
// onMouseMove();
// if (!isMobile) {
//     document.addEventListener('mousemove', onMouseMove);
// }
// const onTouch = (e) => {
//     isMobile = true;
//     if (isHovering || isInSelector) {
//         switch (currentInfo) {
//             case "logo":
//                 selTitle.innerHTML = selectorInfo.logo.title;
//                 selP.innerHTML = selectorInfo.logo.p + mobileTouch;
//                 break;
//             case "headerContent":
//                 selTitle.innerHTML = selectorInfo.headerContent.title;
//                 selP.innerHTML = selectorInfo.headerContent.p + mobileTouch;
//                 break;
//             case "contact":
//                 selTitle.innerHTML = selectorInfo.contact.title;
//                 selP.innerHTML = selectorInfo.contact.p + mobileTouch;
//                 break;
//             case "simg":
//                 selTitle.innerHTML = selectorInfo.simg.title;
//                 selP.innerHTML = selectorInfo.simg.p + mobileTouch;
//                 break;
//             case "info":
//                 selTitle.innerHTML = selectorInfo.info.title;
//                 selP.innerHTML = selectorInfo.info.p + mobileTouch;
//                 break;
//             case "products":
//                 selTitle.innerHTML = selectorInfo.products.title;
//                 selP.innerHTML = selectorInfo.products.p + mobileTouch;
//                 break;
//             case "sbimg":
//                 selTitle.innerHTML = selectorInfo.sbimg.title;
//                 selP.innerHTML = selectorInfo.sbimg.p + mobileTouch;
//                 break;
//             case "sbanner":
//                 selTitle.innerHTML = selectorInfo.sbanner.title;
//                 selP.innerHTML = selectorInfo.sbanner.p + mobileTouch;
//                 break;
//             case "demoFooter":
//                 selTitle.innerHTML = selectorInfo.demoFooter.title;
//                 selP.innerHTML = selectorInfo.demoFooter.p + mobileTouch;
//                 break;
//         }
//         selector.style.animationDuration = "0.15s"
//         selector.classList.remove("menu-icon-open-in");
//         selector.classList.add("menu-icon-open-out");
//         selector.style.display = "block";
//         if (arrow.getBoundingClientRect().left + (arrow.getBoundingClientRect().width / 2) + pageSpace < selector.getBoundingClientRect().width) {
//             selector.style.transform = "scaleX(-1)";
//         }
//         else if (arrow.getBoundingClientRect().left + (arrow.getBoundingClientRect().width / 2) - pageSpace > selector.getBoundingClientRect().width){
//             selector.style.transform = "scaleX(1)";
//         }
//         if (selector.style.transform == "scaleX(-1)") {
//             selector.style.left = e.touches[0].clientX + 'px';
//             selector.style.top = 'calc(' + e.touches[0].clientY + 'px - 8vh - 16px)';
//         }
//         if (selector.style.transform == "scaleX(1)" || selector.style.transform == "") {
//             selector.style.left = 'calc(' + e.touches[0].clientX + 'px - 20vw)';
//             selector.style.top = 'calc(' + e.touches[0].clientY + 'px - 8vh - 16px)';
//         }
//     }
//     else if(!isHovering && !isInSelector) {
//         selector.style.animationDuration = "0.1s"
//         setTimeout(() => {
//             selector.classList.remove("menu-icon-open-out");
//             selector.classList.add("menu-icon-open-in");
//         }, 50)
//         setTimeout(() => {
//             selector.style.display = "none";
//             selector.style.transform = "scaleX(1)";

//         }, 100)
//     }
// }
// document.addEventListener('touchstart', onTouch);



// logo.addEventListener('mouseleave', function () {
//     isHovering = false;
// }, false)
// logo.addEventListener('mouseover', function () {
//     isHovering = true;
//     currentInfo = "logo";
// }, false)
// logo.addEventListener('touchstart', function () {
//     isHovering = true;
//     currentInfo = "logo";
// }, false)
// headerContent.addEventListener('mouseleave', function () {
//     isHovering = false;
// }, false)
// headerContent.addEventListener('mouseover', function () {
//     isHovering = true;
//     currentInfo = "headerContent";
// }, false)
// headerContent.addEventListener('touchstart', function () {
//     isHovering = true;
//     currentInfo = "headerContent";
// }, false)
// contact.addEventListener('mouseleave', function () {
//     isHovering = false;
// }, false)
// contact.addEventListener('mouseover', function () {
//     isHovering = true;
//     currentInfo = "contact";
// }, false)
// contact.addEventListener('touchstart', function () {
//     isHovering = true;
//     currentInfo = "contact";
// }, false)
// let simg = document.getElementById("simg");
// simg.addEventListener('mouseleave', function () {
//     isHovering = false;
// }, false)
// simg.addEventListener('mouseover', function () {
//     isHovering = true;
//     currentInfo = "simg";
// }, false)
// simg.addEventListener('touchstart', function () {
//     isHovering = true;
//     currentInfo = "simg";
// }, false)
// let sbimg = document.getElementById("sbimg");
// sbimg.addEventListener('mouseleave', function () {
//     isHovering = false;
// }, false)
// sbimg.addEventListener('mouseover', function () {
//     isHovering = true;
//     currentInfo = "sbimg";
// }, false)
// sbimg.addEventListener('touchstart', function () {
//     isHovering = true;
//     currentInfo = "sbimg";
// }, false)
// let info = document.getElementById('info');
// info.addEventListener('mouseleave', function () {
//     isHovering = false;
// }, false)
// info.addEventListener('mouseover', function () {
//     isHovering = true;
//     currentInfo = "info";
// }, false)
// info.addEventListener('touchstart', function () {
//     isHovering = true;
//     currentInfo = "info";
// }, false)
// products.addEventListener('mouseleave', function () {
//     isHovering = false;
// }, false)
// products.addEventListener('mouseover', function () {
//     isHovering = true;
//     currentInfo = "products";
// }, false)
// products.addEventListener('touchstart', function () {
//     isHovering = true;
//     currentInfo = "products";
// }, false)
// sbanner.addEventListener('mouseleave', function () {
//     isHovering = false;
// }, false)
// sbanner.addEventListener('mouseover', function () {
//     isHovering = true;
//     currentInfo = "sbanner";
// }, false)
// sbanner.addEventListener('touchstart', function () {
//     isHovering = true;
//     currentInfo = "sbanner";
// }, false)
// let demoFooter = document.getElementById("demoFooter");
// demoFooter.addEventListener('mouseleave', function () {
//     isHovering = false;
// }, false)
// demoFooter.addEventListener('mouseover', function () {
//     isHovering = true;
//     currentInfo = "demoFooter";
// }, false)
// demoFooter.addEventListener('touchstart', function () {
//     isHovering = true;
//     currentInfo = "demoFooter";
// }, false)
// selector.addEventListener('mouseleave', function () {
//     isInSelector = false;
// }, false)
// selector.addEventListener('mouseover', function () {
//     isInSelector = true;
// }, false)
// selector.addEventListener('touchstart', function () {
//     isInSelector = true;
// }, false)

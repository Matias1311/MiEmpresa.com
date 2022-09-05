function closeBanner () {
    banner.style.display = "none";
    bannerShow.style.display = "block";
}
function showBanner() {
    banner.style.animationDelay = "0s";
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

function showTips() {
    document.getElementById("mainTips").style.display = "grid";
    document.querySelector("#mainTips video").currentTime = 0;
    document.querySelector("#mainTips video").play();
    document.getElementById("timeInput").removeEventListener("mouseup", showTips)
    document.getElementById("timeInput").removeEventListener("touchend", showTips)
    document.getElementById("timeInput").removeEventListener("touchcancel", showTips)
}
function hideTips() {
    document.getElementById("mainTips").style.display = "none";
    document.getElementById("tipsShow").style.display = "block";
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

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};
const navMobile = navigator.userAgentData.mobile;
function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}
if (isMobile.any() || window.mobileCheck() || navMobile || detectMob() || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || /AndroidwebOSiPhoneiPadiPodBlackBerryIEMobileOpera Mini/i.test(navigator.userAgent) || /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent) || /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform)) || typeof window.orientation !== 'undefined' || /android|iphone|kindle|ipad/i.test(navigator.userAgent) || function isMobileDevice() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
} == true) {
    document.getElementById("mobCss").setAttribute("media", "all");
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

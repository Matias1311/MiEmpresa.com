function displayInfo (number) {
    c1.style.display = "none";
    c2.style.display = "none";
    c3.style.display = "none";
    c4.style.display = "none";
    c5.style.display = "none";
    c6.style.display = "none";
    c7.style.display = "none";
    c8.style.display = "none";

    switch (number) {
        case 1:
            c1.style.display = "block";
            break;
        case 2:
            c2.style.display = "block";
            break;
        case 3:
            c3.style.display = "block";
            break;
        case 4:
            c4.style.display = "block";
            break;
        case 5:
            c5.style.display = "block";
            break;
        case 6:
            c6.style.display = "block";
            break;
        case 7:
            c7.style.display = "block";
            break;
        case 8:
            c8.style.display = "block";
            break;
        default:
            console.log("ERROR: INVALID SWITCH ARGUMENT");
            break;
    }
}
displayInfo(1);

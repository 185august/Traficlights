function activeLights(color1, color2, color3) {
    document.getElementById('redLight').style.backgroundColor = color1;
    document.getElementById('yellowLight').style.backgroundColor = color2;
    document.getElementById('greenLight').style.backgroundColor = color3;
}

function autoLightBtn() {
    setTimeout(() => {
        activeLights("red", "gray", "gray");
    }, 1000);
    setTimeout(() => {
        activeLights("gray", "yellow", "gray");
    }, 2000);
    setTimeout(() => {
        activeLights("gray", "gray", "green");
    }, 3000);
    setTimeout(() => {
        activeLights("gray", "gray", "gray");
        updateView();
    }, 4000);
}
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
     <div id="traficLights">
      ${createDivs('redLight')}
      ${createDivs('yellowLight')}
      ${createDivs('greenLight')}
      
    </div>
    <div>
      ${createButtons('btn1', 'red', 'gray', 'gray', 'red')}
      ${createButtons('btn2', 'gray', 'yellow', 'gray', 'yellow')}
      ${createButtons('btn2', 'gray', 'gray', 'red', 'green')}
      
    </div>
    <div>
      <button onclick="autoLightBtn()">Automatisk</button>
    </div>
    `
}

function createButtons(id, color1, color2, color3, buttonInnerHTMLText) {
  return `
    <button id="${id}" onclick="activeLights('${color1}', '${color2}', '${color3}')"})>
        ${buttonInnerHTMLText}
      </button>
  `
}
function createDivs(idDiv) {
  return `
  <div id="${idDiv}" class="circle2 "></div>
  `
}
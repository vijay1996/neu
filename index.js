let backgroundColor = "#e0e5ec";
let fontColor = "#4d4d4d";
let darkShadowColor = "#a3b1c6";
let brightShadowColor="#ffffff";

let fontFamily = "Arial, Helvetica, sans-serif"
let fontWeight = "lighter";

let allElements = document.querySelector("body");
let h1Element = document.querySelectorAll("h1");
let h2Element = document.querySelectorAll("h2");
let h3Element = document.querySelectorAll("h3");
let h4Element = document.querySelectorAll("h4");
let h5Element = document.querySelectorAll("h5");
let divElement = document.querySelectorAll("div");
let pElement = document.querySelectorAll("p");

let globalLightPosition = "TL"

function initialize() {
    allElements.style.margin = "auto";
    allElements.style.padding = "auto";
    allElements.style.backgroundColor = backgroundColor;
    allElements.style.color = fontColor;
    allElements.style.fontFamily = fontFamily;
    allElements.style.fontWeight= fontWeight;
    allElements.style.lineHeight = '1.4';
}

function createShadows(lightPosition, tag) {
    lightPosition = globalLightPosition;
    tag.style.border = "none";
    if (lightPosition == "TL") {
        tag.style.boxShadow = '9px 9px 16px' + darkShadowColor + ', -9px -9px 36px'+ brightShadowColor;
    } 
    if (lightPosition == "T"){
        tag.style.boxShadow = '0px 9px 16px' + darkShadowColor + ', 0px 0px 36px'+ brightShadowColor;
    }
    if (lightPosition == "TR") {
        tag.style.boxShadow = '-9px 9px 16px' + darkShadowColor + ', 9px -9px 36px'+ brightShadowColor;
    }
    if (lightPosition == "R") {
        tag.style.boxShadow = '-9px 0px 16px' + darkShadowColor + ', 9px 0px 36px'+ brightShadowColor;
    }
    if (lightPosition == "BR") {
        tag.style.boxShadow = '-9px -9px 16px' + darkShadowColor + ', 9px 9px 36px'+ brightShadowColor;
    }
    if (lightPosition == "B") {
        tag.style.boxShadow = '0px -9px 16px' + darkShadowColor + ', 0px 9px 36px'+ brightShadowColor;
    }
    if (lightPosition == "BL") {
        tag.style.boxShadow = '9px -9px 16px' + darkShadowColor + ', -5px 5px 36px'+ brightShadowColor;
    }
    if (lightPosition == "L") {
        tag.style.boxShadow = '9px 0px 16px' + darkShadowColor + ', 0px -5px 36px'+ brightShadowColor;
    }

}

function styleElements(lightPosition) {
    if (h1Element) {
        h1Element.forEach(element => {
            element.style.textAlign = "center";
        });
    }
    if (h2Element) {
        h2Element.forEach(element => {
            element.style.textAlign = "center";
        });
    }
    if (h3Element) {
        h3Element.forEach(element => {
            element.style.textAlign = "center";
        });
    }
    if (h4Element) {
        h4Element.forEach(element => {
            element.style.textAlign = "center";
        });
    }
    if (h5Element) {
        h5Element.forEach(element => {
            element.style.textAlign = "center";
        });
    }
    
    if (divElement) {
        divElement.forEach(element => {
            element.style.textAlign = "center";
            element.style.paddingLeft = "5%";
            element.style.paddingRight = "5%";
            element.style.paddingTop = "2%";
            element.style.paddingBottom = "2%";
            element.style.marginLeft = "5%";
            element.style.marginRight = "5%";
            element.style.marginBottom = "2%";
            createShadows(lightPosition, element);
        });
    }
    if (pElement) {
        pElement.forEach(element => {
            element.style.textAlign = "justify";
        });
    }
}

function applyNue(lightPosition = "TL") {
    globalLightPosition = lightPosition;
    initialize();
    styleElements(lightPosition);
}

function alignElement(element, alignment) {
    let Element = document.querySelectorAll(element);
    Element.forEach(element => {
        element.style.textAlign = alignment;
        element.style.alignElement = alignment;
    });
}

function removeNueFromElement(element) {
    element = document.querySelectorAll(element);
        element.forEach(item => {
            item.style.boxShadow = "none";
            item.style.margin = "0";
        });
}

function applyNueToElement (element, lightPosition="") {
    lightPosition = globalLightPosition;
    elements = document.querySelectorAll(element)
    elements.forEach(item => {
        item.style.backgroundColor = backgroundColor;
        item.style.color = fontColor;
        createShadows(globalLightPosition,item);
    });
}

module.export.applyNue = applyNue;
module.export.alignElement = alignElement;
module.export.applyNueToElement = applyNueToElement;
module.export.removeNueFromElement = removeNueFromElement;
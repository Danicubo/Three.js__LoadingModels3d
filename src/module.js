import { changeModel1, changeModel2, changeModel3, changeModel4, changeTexture1, changeTexture2, changeTexture3 } from 'C:/Users/Daniel/Desktop/MainCompuGrafica/6-BaseProyect2/src/app.js';


/* Variables Globales */
const backBtn = document.querySelector('#backBtn')
const btnCrateScene = document.querySelector('#btn1');
const contentModels = document.querySelector('#contentModels');
const contentTexture = document.querySelector('#contentTexture');
const model1Btn = document.querySelector('#modelOne');
const model2Btn = document.querySelector('#modelTwo');
const model3Btn = document.querySelector('#modelThree');
const model4Btn = document.querySelector('#modelFour');
const texture1Btn = document.querySelector('#texture1');
const texture2Btn = document.querySelector('#texture2');
const texture3Btn = document.querySelector('#texture3');



/* Initial  */
contentModels.style.display = "none";
contentTexture.style.display = "none";
backBtn.style.display = "none";

/* Boton para crear escena y cargar modelos */
btnCrateScene.onclick = function() {
    document.querySelector('header').style.display = "none";
    document.querySelector('main').style.display = "none";
    document.querySelector('footer').style.display = "none"
    document.querySelector("canvas").style.display = "block";
    backBtn.style.display = "block";
    contentModels.style.display = "flex";
    contentTexture.style.display = "flex";
    console.log("Se ejecutó el bontón");
}

/* Funciones para cargar modelos 3d */
model1Btn.onclick = function() {
    changeModel1('Modelo1');
}

model2Btn.onclick = function() {
    changeModel2('Modelo2');
}

model3Btn.onclick = function() {
    changeModel3('Modelo3');
}

model4Btn.onclick = function() {
    changeModel4('Modelo4');
}

/* Funciones para cargar texturas */
texture1Btn.onclick = function() {
    changeTexture1();
}

texture2Btn.onclick = function() {
    changeTexture2();
}
texture3Btn.onclick = function() {
    changeTexture3();
}

/* Funcion BackBtn */
backBtn.onclick = function() {
    document.querySelector('header').style.display = "block"
    document.querySelector('main').style.display = "block";
    document.querySelector('footer').style.display = "inline"
    contentModels.style.display = "none";
    contentTexture.style.display = "none";
    backBtn.style.display = "none";
    document.querySelector("canvas").style.display = "none";
}
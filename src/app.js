import * as THREE from 'https://cdn.skypack.dev/three@0.131.3';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.131.3/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.131.3/examples/jsm/loaders/GLTFLoader.js';

/* Variables Globales */

let car;
let directionalLight;

/* Configuracion General */

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    5000,
);
const renderer = new THREE.WebGLRenderer({ antialias: true });

/* Intancia para Textura1 */
const textureLoader = new THREE.TextureLoader();
const map = textureLoader.load(
    'models/Modelo1/textures/Material_baseColor.png',
);
map.encoding = THREE.sRGBEncoding;
map.flipY = false;

/* Intancia para Textura2 */
const textureLoader2 = new THREE.TextureLoader();
const map2 = textureLoader2.load(
    'models/Modelo2/textures/gt_body_diffuse.png',
);
map2.encoding = THREE.sRGBEncoding;
map2.flipY = false;

/* Instancia  para Textura3 */
const textureLoader3 = new THREE.TextureLoader();
const map3 = textureLoader3.load(
    'models/Modelo3/textures/930_wunderbaum_baseColor.png',
);
map3.encoding = THREE.sRGBEncoding;
map3.flipY = false;

/* Instancia para cargar modelos 3d  */
let loader = new GLTFLoader();


/* Configuarión pantalla */
document.body.onload = () => {
    main();
};

window.onresize = () => {
    scene.background = new THREE.Color(0xdddddd);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth * 0.8, window.innerHeight, true);
};

/* Funcion Main */
function main() {
    // Configuracion inicial
    renderer.setSize(window.innerWidth * 0.8, window.innerHeight);
    renderer.shadowMap.enabled = true;
    scene.background = new THREE.Color(0xdddddd);
    document.body.appendChild(renderer.domElement);

    // AxesHelper
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // Visual Configs
    cameraConfig();
    controlsConfig();

    // Light
    setupLights();
}

/* Funciones cargar modelos 3d */

export function changeModel1(Modelo1) {

    scene.children = [];
    // Light
    setupLights();
    loader.load(
        `models/${Modelo1}/scene.gltf`,
        function(gltf) {
            car = gltf.scene.children[0];
            scene.add(car);
            animate();
        },
        function(xhr) {
            console.log((xhr.loaded / xhr.total) * 100 + '% cargado modelo');
        },
        function(error) {
            console.log('Un error ocurrio');
        },
    );
}

export function changeModel2(Modelo2) {

    scene.children = [];
    // Light
    setupLights();
    loader.load(
        `models/${Modelo2}/scene.gltf`,
        function(gltf) {
            car = gltf.scene.children[0];
            scene.add(car);
            animate();
        },
        function(xhr) {
            console.log((xhr.loaded / xhr.total) * 100 + '% cargado modelo');
        },
        function(error) {
            console.log('Un error ocurrio');
        },
    );
}

export function changeModel3(Modelo3) {

    scene.children = [];
    // Light
    setupLights();
    loader.load(
        `models/${Modelo3}/scene.gltf`,
        function(gltf) {
            car = gltf.scene.children[0];
            scene.add(car);
            animate();
        },
        function(xhr) {
            console.log((xhr.loaded / xhr.total) * 100 + '% cargado modelo');
        },
        function(error) {
            console.log('Un error ocurrio');
        },
    );
}

export function changeModel4(Modelo4) {

    scene.children = [];
    // Light
    setupLights();
    loader.load(
        `models/${Modelo4}/scene.gltf`,
        function(gltf) {
            car = gltf.scene.children[0];
            scene.add(car);
            animate();
        },
        function(xhr) {
            console.log((xhr.loaded / xhr.total) * 100 + '% cargado modelo');
        },
        function(error) {
            console.log('Un error ocurrio');
        },
    );
}

/* Función Cambiar Texturas Modelo */

export function changeTexture1() {
    car.traverse(function(node) {
        if (node instanceof THREE.Mesh) {
            node.material.map = map;
        }
    });
    animate();
}

export function changeTexture2() {
    car.traverse(function(node) {
        if (node instanceof THREE.Mesh) {
            node.material.map = map2;
        }
    });
    animate();
}

export function changeTexture3() {
    car.traverse(function(node) {
        if (node instanceof THREE.Mesh) {
            node.material.map = map3;
        }
    });
    animate();
}

/* Funcion Configuracion Controles */
function controlsConfig() {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
    controls.enablePan = false;
}

/* Funcion Camara */
function cameraConfig() {
    camera.position.x = 8;
    camera.position.y = 2;
    camera.position.z = 8;
}

/* Funcion setupLights */
function setupLights() {

    let light, light2, light3, light4;
    directionalLight = new THREE.DirectionalLight(0xffffff, 20);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    light = new THREE.PointLight(0xc4c4c4, 1.5);
    light.position.set(0, 300, 500);
    scene.add(light);

    light2 = new THREE.PointLight(0xc4c4c4, 1.5);
    light2.position.set(500, 100, 0);
    scene.add(light2);

    light3 = new THREE.PointLight(0xc4c4c4, 1.5);
    light3.position.set(0, 100, -500);
    scene.add(light3);

    light4 = new THREE.PointLight(0xc4c4c4, 1.5);
    light4.position.set(-500, 300, 500);
    scene.add(light4);

}

/* Funcion Animate */
function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
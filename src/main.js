import * as THREE from 'three';

import { Entity } from './entity';
import { House } from './house';
import { loadModel } from './modelLoader';


//configuring renderer
const width = window.innerWidth;
const height = window.innerHeight;

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('app')
});
renderer.setClearColor(0x0000ff);
renderer.setSize(width, height);

//light, camera, acti.. i mean, scene!
const mainCamera = new THREE.PerspectiveCamera(60, width / height, 0.1, 50);
const scene = new THREE.Scene();

const dlight = new THREE.DirectionalLight(0xFFFFFF, 1);
dlight.position.set(0,50,);
scene.add(dlight);

const alight = new THREE.AmbientLight(0xFFFFFF, 1);
scene.add(alight);

//entity management
var entList = []

async function initEntities(){
    let newModel = await loadModel("house/housexd.obj", "house/housexd.mtl");
    let e = new House(entList, newModel, {x:0,y:0,z:-15});

    entList.forEach((e) => {
        renderEntity(e);
        e.init();
    });
    scene.add(e.model);
}

function renderEntity(e){
    e.model.position.x = e.position.x;
    e.model.position.y = e.position.y;
    e.model.position.z = e.position.z;
}

function mainGameLoop(){
    renderer.render(scene, mainCamera);
    entList.forEach((e) => {
        renderEntity(e);
        e.tick();
    });
    requestAnimationFrame(mainGameLoop);
}

initEntities();
mainGameLoop();
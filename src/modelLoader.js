import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader';

const objLoader = new OBJLoader();
const mtlLoader = new MTLLoader();

export async function loadModel(obj, mtl){
    const mtlLoaded = await mtlLoader.loadAsync("assets/models/"+mtl);
    objLoader.setMaterials(mtlLoaded);
    const objLoaded = await objLoader.loadAsync("assets/models/"+obj);

    return objLoaded;
}
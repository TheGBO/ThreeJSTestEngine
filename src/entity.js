import * as THREE from 'three';

export class Entity{
    constructor(entList, model, position){
        entList.push(this);
        this.model = model;
        this.position = position;


        this.init();
    }

    init(){

    }

    tick(){

    }

}
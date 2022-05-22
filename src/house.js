import { Entity } from "./entity";

export class House extends Entity{
    tick(){
        this.position.x += 0.01;
    }
}
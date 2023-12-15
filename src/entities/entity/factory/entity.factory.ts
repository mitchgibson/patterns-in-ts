import { Entity } from "../entity.class";

export class EntityFactory {
    
    public create(): Entity {
        return new Entity();
    }

    public createMany(count: number): Entity[] {
        const entities: Entity[] = [];
        for (let i = 0; i < count; i++) {
            entities.push(this.create());
        }
        return entities;
    }
}
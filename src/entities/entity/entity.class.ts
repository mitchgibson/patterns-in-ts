import { cloneDeep } from "../../utils/object/clone-deep";
import { EntityData } from "./entity.data";

export class Entity<T = EntityData> {
    protected _data: T;

    public hydrate(data: T): void {
        this._data = Object.freeze(cloneDeep<T>(data));
    }
}
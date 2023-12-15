import { Entity } from "../entity.class";
import { EntityData } from "../entity.data";
import { EntityFactory } from "../factory/entity.factory";

export class Dto<T extends {}> {
    protected readonly _data: T;
    protected readonly _validators: Record<keyof T, (value: any) => boolean> = {} as Record<keyof T, (value: any) => boolean>;
    protected readonly _entityFactory: EntityFactory = new EntityFactory();
    protected readonly _dataAdapter: (data: T) => EntityData = (data: T) => data as EntityData;

    constructor(data: T) {
        if (!data) throw new Error("Input data is required");
        this._data = Object.freeze({ ...data });
    }

    public toEntity<T = Entity>(): T {
        this.validate();
        const entity = this._entityFactory.create();
        entity.hydrate(this._dataAdapter(this._data));
        return entity as T;
    }

    public validate(): boolean {
        this.runValidators();
        return true;
    }

    private runValidators(): void {
        Object.keys(this._validators).forEach((key: string) => {
            this.runValidator(key);
        });
    }

    private runValidator(key: string): void {
        if (!this._validators[key as keyof T](this._data[key as keyof T])) {
            throw new Error(`Invalid or missing value for '${key}'`);
        }
    }
}
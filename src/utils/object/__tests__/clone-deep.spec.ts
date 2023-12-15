import { describe, it, expect } from "vitest";
import { cloneDeep } from "../clone-deep";

describe("cloneDeep", () => {
    it("should clone primitives", () => {
        expect(cloneDeep(1)).toBe(1);
        expect(cloneDeep("a")).toBe("a");
        expect(cloneDeep(true)).toBe(true);
        expect(cloneDeep(null)).toBe(null);
        expect(cloneDeep(undefined)).toBe(undefined);
    });

    it("should clone arrays", () => {
        const arr = [1, 2, 3];
        const arr2 = cloneDeep(arr);
        expect(arr2).toEqual(arr);
        expect(arr2).not.toBe(arr);
    });

    it("should clone objects", () => {
        const obj = { a: 1, b: 2 };
        const obj2 = cloneDeep(obj);
        expect(obj2).toEqual(obj);
        expect(obj2).not.toBe(obj);
    });

    it("should clone nested objects", () => {
        const obj = { a: { b: { c: 1 } } };
        const obj2 = cloneDeep(obj);
        expect(obj2).toEqual(obj);
        expect(obj2).not.toBe(obj);
        expect(obj2.a).not.toBe(obj.a);
        expect(obj2.a.b).not.toBe(obj.a.b);
    });

    it("should clone nested arrays", () => {
        const obj = { a: { b: [{ c: 1 }, { c: 2 }] } };
        const obj2 = cloneDeep(obj);
        expect(obj2).toEqual(obj);
        expect(obj2).not.toBe(obj);
        expect(obj2.a).not.toBe(obj.a);
        expect(obj2.a.b).not.toBe(obj.a.b);
        expect(obj2.a.b[0]).not.toBe(obj.a.b[0]);
        expect(obj2.a.b[1]).not.toBe(obj.a.b[1]);
    });

    it("should clone circular references", () => {
        const obj: any = { a: { b: { c: 1 } } };
        obj.a.b.d = obj;
        const obj2 = cloneDeep(obj);
        expect(obj2).toEqual(obj);
        expect(obj2).not.toBe(obj);
        expect(obj2.a).not.toBe(obj.a);
        expect(obj2.a.b).not.toBe(obj.a.b);
        expect(obj2.a.b.d).not.toBe(obj.a.b.d);
        expect(obj2.a.b.d).toBe(obj2);
    });
});
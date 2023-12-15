export function cloneDeep<T = any>(obj: any, references = new WeakMap()): T {
    if (Object(obj) !== obj) return obj; // primitives
    if (references.has(obj)) return references.get(obj); // circular reference
    const result = Array.isArray(obj) ? [] : {};
    references.set(obj, result);
    return Object.assign(result, ...Object.keys(obj).map((key) => ({ [key]: cloneDeep(obj[key], references) })));
}

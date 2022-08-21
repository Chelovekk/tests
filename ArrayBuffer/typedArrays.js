const types = [
    Int8Array, Int16Array, Int32Array,
    Uint8Array, Uint16Array, Uint32Array, Uint8ClampedArray,
    Float32Array, Float64Array, BigInt64Array,
]

const size = types.map(typedArray => typedArray.BYTES_PER_ELEMENT);

console.dir({
    types,
    size
})
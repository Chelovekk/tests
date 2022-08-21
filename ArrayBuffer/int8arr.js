const arr8 = new Int8Array(8);
// const arr8 = new Int8Array([1,2,3]);
// const arr8 = new Int8Array(buffer);

for(let i = 0; i < 10; i++){
    arr8[i] = i*10;
}

console.dir({
    arr8,
    length: arr8.length,
    byteLength: arr8.byteLength,
    buffer: arr8.buffer,
    byteOffset: arr8.byteOffset,
})

console.log(...arr8);
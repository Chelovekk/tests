const len = 1024;

const buffer = new ArrayBuffer(len);
const view1 = new DataView(buffer);
const view2 = new DataView(buffer, 8, 24);
const view3 = new DataView(buffer, 128, 16);


for(let i = 0; i < len; i++){
    const value = (i + 7) * 5;
    console.log(value);
    view1.setUint8(i, value);
}

console.dir({ view1, view2, view3 });

console.dir({
    val: view1.getUint8(10),
    int16view1: view1.getInt16(10),
    int16view2: view2.getInt16(10),
    int32view1: view1.getInt32(10),

    int8view1: view1.getInt32(5),
    uint8view1: view1.getUint8(5),

    int32view1BE: view1.getInt32(5),
    int32view1LE: view1.getInt32(5, true),

    int32view1BEhex: view1.getInt32(5).toString(16),
    int32view1LEhex: view1.getInt32(5, true).toString(16),

    int8view1f: view1.getInt8(5).toString(16),
})

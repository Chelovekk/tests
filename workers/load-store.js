const buffer = new SharedArrayBuffer(40);

const array = new Uint32Array(buffer);
console.dir({ array });

const res = Atomics.store(array, 5, 123);
console.dir({ res });
console.dir({ array });

const val = Atomics.load(array, 5);
console.dir({ val });
console.dir({ array });


const prevAdd = Atomics.add(array, 5, 321);
console.log(prevAdd);

const prevSub = Atomics.sub(array, 5, 123);
console.log(prevSub);

console.dir({ array });

const prevExchange = Atomics.exchange(array, 5, 100);
console.log(prevExchange);

const preCompareExchange = Atomics.compareExchange(array, 5, 100, 200);
console.log(preCompareExchange);

const preCompareExchange1 = Atomics.compareExchange(array, 5, 100, 300);
console.log(preCompareExchange1);

console.dir({ array });
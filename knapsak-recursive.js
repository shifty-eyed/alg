
const values = [
	{ "s": 5, "v": 8 },// 0
	{ "s": 2, "v": 3 },// 1
	{ "s": 4, "v": 5 },// 2
	{ "s": 2, "v": 4 },// 3
	{ "s": 5, "v": 2 },// 4
]

const cache = [];

function ks(n, s, trace) {
	if (cache[key(n,s)]) {
		return cache[key(n,s)]
	}
	let result = {maxValue:0, items:trace}
	if (n >= 0 && s > 0) {
		const space = values[n].s
		const value = values[n].v
		if (space > s) {
			result = ks(n - 1, s, trace)
		} else {
			const a = ks(n - 1, s - space, [n].concat(trace))
			a.maxValue += value;
			const b = ks(n - 1, s, trace)
			result = (a.maxValue > b.maxValue) ? a : b
		}
	}
	cache[key(n, s)] = Object.assign({}, result)
	
	return result
}

function key(n, s) {
	return `k${n},${s}`
}

const a = ks(values.length-1, 7, [])
console.log("total value: "+a.maxValue);
console.log("items: "+a.items);
console.log(JSON.stringify(cache))
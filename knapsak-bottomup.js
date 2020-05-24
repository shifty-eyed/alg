
const items = [
	{ "space": 5, "val": 8 },// 0
	{ "space": 2, "val": 3 },// 1
	{ "space": 4, "val": 5 },// 2
	{ "space": 2, "val": 4 },// 3
	{ "space": 5, "val": 2 },// 4
]

const cache = [];

function ks(capacity) {
	let table = createTable(items.length, capacity)

	for (let r = 1; r <= items.length; r++) {
		for (let c = 1; c <= capacity; c++) {
			const itemSpace = items[r - 1].space
			const itemVal = items[r - 1].val
			const prevVal = table[r-1][c]
			if (c < itemSpace) {
				table[r][c] = prevVal
			} else {
				const newVal = itemVal + table[r - 1][c - itemSpace]
				table[r][c] = Math.max(prevVal, newVal)
			}
		}
	}

	return { val: table[items.length][capacity], included: traceItems(table, capacity) };
}

function traceItems(table, capacity) {
	const result = []
	let c = capacity
	for (let r = items.length; r >= 0; r--) {
		const curVal = table[r][c]
		const prevVal = table[r - 1][c]
		const itemSpace = items[r - 1].space
		if (curVal != prevVal) {

		}
	}
	return result
}


function createTable(rows, cols) {
	let table = [];
	for (let i = 0; i <= rows; i++) {
		table[i] = [];
		for (let j = 0; j <= cols; j++) {
			table[i][j] = 0;
		}
	}
	return table;
}

for (let i = 0; i < 15; i++) {
	const a = ks(i)
	console.log(`capacity ${i} val: `+a);
}

let a = {
    "editor.autoClosingOvertype": "never",
    "editor.autoClosingQuotes": "never",
    "editor.autoClosingBrackets": "never"
}
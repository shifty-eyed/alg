
class Node {
	val = 0
	next = null
}

function createList(arr) {
	let root = new Node()
	let cur = root
	let prev = null
	for (const i of arr) {
		if (prev) {
			prev.next = cur
		}
		cur.val = i
		prev = cur
		cur = new Node()
	}
	return root
}

function printList(list) {
	if (list == null) {
		return null
	}
	let s = "";
	do {
		s += list.val + ","
		list = list.next
	} while (list != null)
	return s.substr(0, s.length-1)
}

const lst = createList([1,2,3,4,10])

function reverseListCopy(src) {
	let dst = null
	do {
		let prev = new Node()
		prev.next = dst
		prev.val = src.val
		dst = prev
		src = src.next
	} while (src != null)
	return dst
}

//         1 -> 2 -> 3 -> 4 -> null
// null <- 1 <- 2 <- 3 <- 4
function reverseListInplace(node) {
	let prev = null
	let cur = node
	let next = node.next
	do {
		next = cur.next
		cur.next = prev
		prev = cur
		cur = next
	} while (cur != null)
	return prev
}

console.log("list      : " + printList(lst))
console.log("rev copy  : " + printList(reverseListCopy(lst)))
console.log("list again: " + printList(lst))
console.log("revinplace: " + printList(reverseListInplace(lst)))
console.log("list again: " + printList(lst))


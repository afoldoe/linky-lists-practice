//class that takes an array and makes a linked list
class linkyList {
	constructor(items) {
		let previousNode = null;
		items.forEach((item) => {
			let node = {value: item, next: null};
			if(previousNode) previousNode.next = node;
			previousNode = node;
		});
	}

	append(item) {
		if(item) let newNode = {value: item, next: null}; 
		
		let currentItem = null;
		this.tail.next = newNode;
		this.tail = newNode;


	}
}
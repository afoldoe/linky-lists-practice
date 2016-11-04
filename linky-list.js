//class that takes an array and makes a linked list
class linkyList {
	constructor(values) {
		this._length = 0;
		this.head = null;
		let previousNode = null;
		items.forEach((item) => {
			let node = {value: item, next: null};
			if(previousNode) previousNode.next = node;
			previousNode = node;
		});
	}

	getNode(index, ) {
		while
	}

	addNode(value) {
		if(value) let node = new Node(value),
									currentNode = this.head;
		
		if(!currentNode) {
			this.head = node;
			this._length++;
		}

		while(currentNode.next)


	}
}

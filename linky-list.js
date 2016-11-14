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
		if(value) let node = {value: value, next: null},
									currentNode = this.head;
		if(!currentNode) {s
			this.head = node;
			this._length++;
			return node;
		}

		while(currentNode.next) {
			currentNode = currentNode.next;
		}

		currentNode.next = node;
		this._length++;
		return node;

	}

	findNode(index) {
		let currentNode = this.head
				count = 1;
		if(this._length === 0 || this._length < index || index < 1) {
			console.log('Error, node does not exist');
		} 

		while(count < index) {
			count++;
			currentNode = currentNode.next;
		}
		return currentNode;
	}

	deleteNode(index) {
		let currentNode = this.head
				count = 1;
		if(this._length === 0 || this._length < index || index < 1) {
			console.log('Error, node does not exist');
		} 
		while(count < index) {
			count++;
			currentNode = currentNode.next;
		}

		currentNode

	}
}

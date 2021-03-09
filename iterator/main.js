const items = ['yash', 'salian', 7, false];

function Iterator(){
    this.items = items
    this.index = 0
};

Iterator.prototype = {
    hasNext: function(){
        return this.index < this.items.length
    },

    next: function(){
        return this.items[this.index++];
    }
}

const iter = new Iterator(items);

// console.log(iter.hasNext());
// console.log(iter.next());
while(iter.hasNext()){
    console.log(iter.next());
}

class Basket{
    constructor(items = []){
        this.items = items
    }
    addItem(itemToAdd){
        this.items.push(itemToAdd)
    }
    removeItem(nameOfItemToRemove){
        this.items = this.items.filter(item => item.name !== nameOfItemToRemove)
    }

    removeAll(){
        this.items = []
    }

    totalPrice(){
        let runningTotal = 0
        for (let item of this.items){
            runningTotal += item.price
        }
        return runningTotal
    }
}

module.exports = Basket
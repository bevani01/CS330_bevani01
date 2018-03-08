var stores = ['nike', 'Adidas']
var sections = ['shoes', 'clothes', 'equipment']

var shoppingModel = new ShoppingList()
var myView = new ShoppingView(shoppingModel)

function clickedon() {
    let rowcolids = ['nameitem', 'qty', 'store', 'category', 'price', 'priority']
    let vals = {}
    for (let cid of rowcolids) {
        vals[cid] = document.getElementById(cid).value;
    }
    let it = new Item(vals.nameitem, vals.qty, vals.priority, vals.store, vals.category, vals.price)
    shoppingModel.addItem(it)
}


function populateSelect(selectId, sList) {
    let sel = document.getElementById(selectId, sList)
    for (let s of sList) {
        let opt = document.createElement("option")
        opt.value = s
        opt.innerHTML = s
        sel.appendChild(opt)
    }
}

$(document).ready(function () {
    populateSelect('store', stores)
    populateSelect('category', sections)
})
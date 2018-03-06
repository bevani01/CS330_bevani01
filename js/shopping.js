
function  clickedon() {
    let name = document.querySelector("#nameitem").value;
    let quantity = document.querySelector("#quantityitems").value;
    let priority = document.querySelector("#myPriority").value;
    let section = document.querySelector("#mySection").value
    let store = document.querySelector("#myStore").value;
    let price = document.querySelector("#priceitem").value;
    let mytable = document.querySelector("#shoplist")
    lst = [name, quantity, priority, store, section, price];
    let row = document.createElement("tr")
    for (p in lst) {
        let cell = document.createElement("td")
        cell.innerHTML = lst[p]
        row.appendChild(cell)
    }
    mytable.appendChild(row)
}

function item() {
    let name = document.querySelector("#nameitem").value;
}

function shoplist() {
    let mytable = document.querySelector("#shoplist")
}
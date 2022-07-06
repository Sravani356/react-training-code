function save(event) {
    const payload = {
        item: document.getElementById('item').value,
        price: document.getElementById('price').value,
        date: document.getElementById('date').value
    }
    console.log(event);
    fetch("http://localhost:3000/orders", {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-type': 'application/json'
        }
    });
}

( function () {//IIFE 

    async function generateCategoryaDropBox() {
        const categories = await (await fetch("http://localhost:3000/categories")).json();
        console.log(categories);
        const categorySelect = document.querySelector('#categories');
        categories.forEach( category => {
            const row = document.createElement('option');
            row.value = category;
            row.text = category;
            categorySelect.appendChild(row);
        })
    }

    async function generateOrderList() {
    const response = await fetch("http://localhost:3000/orders");
    console.log(response);
    const orders = await response.json();
    const list = document.getElementById("orderlist");
    console.log(orders);
    orders.forEach(order => {
        const row = document.createElement('li');
        const deleteBtn = document.createElement('button');
        deleteBtn.addEventListener(function () {
            fetch("http://localhost:3000/orders/"+ id, {
                method:'delete'
            })
        })
        deleteBtn.textContent = 'delete';
        row.textContent = order.item + ", " + order.price ;
        row.appendChild(deleteBtn);
        list.appendChild(row);
    });
}
generateCategoryaDropBox();
generateOrderList();
})();
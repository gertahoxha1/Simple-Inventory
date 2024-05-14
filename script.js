let inventory = [];

function shtoProduktin() {
    let emri = document.getElementById("emri").value;
    let cmimi = parseFloat(document.getElementById("cmimi").value);
    let sasia = parseInt(document.getElementById("sasia").value);
    if (emri && cmimi && sasia) {
        let existingItem = inventory.find(item => item.name === emri);
        if (existingItem) {
            existingItem.quantity += sasia;
        } else {
            inventory.push({ emri, cmimi, sasia });
        }
    }
    updateInventoryDisplay();
}

function fshijProduktin(index) {
    inventory.splice(index, 1);
    updateInventoryDisplay();
}

function displayInventory() {
    let displayTable = document.getElementById("inventoryDisplay");
    let html = `
        <tr>
            <th>Emri</th>
            <th>Cmimi</th>
            <th>Sasia</th>
        </tr>
    `;
    inventory.forEach(item => {
        html += `
            <tr>
                <td>${item.emri}</td>
                <td>$${item.cmimi.toFixed(2)}</td>
                <td>${item.sasia}</td>
            </tr>
        `;
    });
    displayTable.innerHTML = html;
}

function updateInventoryDisplay() {
    displayInventory();
    document.getElementById("emri").value = "";
    document.getElementById("cmimi").value = "";
    document.getElementById("sasia").value = "";
}
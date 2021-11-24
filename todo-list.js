
function addTodo() {

    title = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('items') == null) {
        itemArray = [];
        itemArray.push([title, desc]);
        localStorage.setItem('items', JSON.stringify(itemArray))
    }
    else {
        itemArrayStr = localStorage.getItem('items')
        itemArray = JSON.parse(itemArrayStr);
        itemArray.push([title, desc]);
        localStorage.setItem('items', JSON.stringify(itemArray))
    }
    showInTable();
}

function showInTable() {
    if (localStorage.getItem('items') == null) {
        itemArray = [];
        localStorage.setItem('items', JSON.stringify(itemArray))
    }
    else {
        itemArrayStr = localStorage.getItem('items')
        itemArray = JSON.parse(itemArrayStr);
    }
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemArray.forEach((element, index) => {
        str += `
                    <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td> 
                    <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
                    </tr>`;
    });
    tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", addTodo);
showInTable();
function deleted(itemIndex) {
    itemArrayStr = localStorage.getItem('items')
    itemArray = JSON.parse(itemArrayStr);
    itemArray.splice(itemIndex, 1);
    localStorage.setItem('items', JSON.stringify(itemArray));
    showInTable();
}
function clearStorage() {
    if (confirm("Do you areally want to clear?")) {
        localStorage.clear();
        showInTable();
    }
}

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var editbtn = document.createElement('button');
    editbtn.className = 'btn btn-sm float-right edit';
    editbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbtn);

    var del = document.createElement('button');
    del.className = 'btn btn-danger btn-sm float-right delete';
    del.appendChild(document.createTextNode('Delete'));
    li.appendChild(del);

    
    
    itemList.appendChild(li);
}

    function removeItem(e){
        if(e.target.classList.contains('delete')){
            if(confirm('Are You Sure ?'))
            {
                var li = e.target.parentElement;
                itemList.removeChild(li);
            }
        }
    }


document.addEventListener('DOMContentLoaded', () => {

    let list_group_item = document.querySelectorAll('.list-group-item');
    list_group_item.forEach(function(item) {

        item.addEventListener('click', () => {
            if (item.className == 'list-group-item list-group-item-action') {
                item.classList.add('text-decoration-line-through');
            } else {
                item.classList.remove('text-decoration-line-through');
            }
        });
 
    });

    let btnUpdate = document.getElementById('btnUpdate');
    btnUpdate.addEventListener('click', () => {
        let completedItems = document.querySelectorAll('.list-group-item.list-group-item-action.text-decoration-line-through');
        completedItems.forEach(function(item) {

            fetch('/checklist_update/updateStatus/'+ item.id, {method: 'POST'})
            .then(function(response) {
                if(response.ok) {
                console.log('Status was updated');
                return;
                }
                throw new Error('Request failed');
            })
            .catch(function(error) {
                console.log(error);
            });
     
        });
    });

});
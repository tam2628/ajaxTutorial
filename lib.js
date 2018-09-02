function asyncAjax(url, ajax, _) {
    ajax.onload = function() {
        if (this.status === 200) {
            // status is OK
            emails = [];
            JSON.parse(this.responseText).forEach( user => emails.push(user.email) ); 
            let ul = document.createElement('ul');
            
            emails.forEach( email => {
                li = document.createElement('li');
                li.innerHTML = email;
                ul.appendChild(li);
            })
            _.innerHTML = ul.innerHTML;
        } 
    }
    ajax.open("GET", url, true); 
    //By specifying true we're making it asynchronous which means program execution will not wait for the response to come
    ajax.send();
}

function syncAjax(url, ajax, _){
    ajax.open("GET", url, false); 
    ajax.send();
    _.innerHTML = ajax.responseText;
} 
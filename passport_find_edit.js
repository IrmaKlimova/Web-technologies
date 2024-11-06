const node_for_click = document.getElementById("for_click");

function find_edit() {
    
    const surname = document.getElementById('surname-text');
    const name = document.getElementById('name-text');
    const birthYear = document.getElementById('birth-year-text');

    surname.innerText = "Klimova"; 
    name.innerText = "Irma";        
    birthYear.innerText = "2005";   
}

node_for_click.addEventListener("click", find_edit);
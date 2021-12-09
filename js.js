let ajouter = document.querySelector('.ajouter');
//console.log(ajouter);
let input = document.querySelector('.input');
//console.log(input)

ajouter.addEventListener('click', ajouterUnePersonne)

function ajouterUnePersonne () {
    let nouveau_nom = input.value;

    if (localStorage.getItem('nom') == null ) {
        localStorage.setItem('nom' , '[]');
    }
    let ancien_nom = JSON.parse (localStorage.getItem('nom'));
    
    ancien_nom.push(nouveau_nom);

    localStorage.setItem('nom',JSON.stringify(ancien_nom));
    input.value = "" ;
    let ul = document.getElementById("output")
    ul.innerHTML="" ;
    
    if (localStorage.getItem('nom') != null ) {
        ancien_nom.forEach(element => {
            let elem = document.createElement('li');
            elem.innerHTML = element;
            ul.appendChild(elem);   
            
        });
    }
}


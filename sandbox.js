$(document).ready(function(){
    // milestone 1:
    // definire un array di oggetti; ogni oggetto
    // rappresenta un'icona, che è caratterizzata da:
    // nome, prefisso, tipo e famiglia.
    // Utilizzando la funzione forEach e il template
    // literal, visualizzare in pagina tutte le icone con il proprio nome.

    // milestone 2:
    // definire un array di colori e associare ad ogni
    // tipo di icona un colore.
    // Visualizzare le icone di colore diverso in base al tipo.

    // milestone 3:
    // aggiungere una select per filtrare le icone in
    // base al tipo.
    // Popolare le options della select dinamicamente
    // e, ogni volta che cambia il valore selezionato,
    // visualizzare le icone corrispondenti.


    const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];

// milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template
// literal, visualizzare in pagina tutte le icone con il proprio nome.

icons.forEach(function(icon){

    let {name, prefix, type, family} = icon;

    let icon_view =
    `<div class="icon-container">
        <i class="${family} ${prefix}${name}"></i>
        <p>${name}</p>
     </div>`;

    $('main').append(icon_view);
});

// milestone 2:
// definire un array di colori e associare ad ogni
// tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al tipo.
    let iconsColors = ['red', 'blue', 'green'];
    let iconsType = [];

    icons.forEach(function(icon){

        let {type} = icon;

        if (!iconsType.includes(type)) {
            iconsType.push(type);
        }
    });
    console.log(iconsType);



});

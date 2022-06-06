var peopleRaw = localStorage.getItem('people')
if(peopleRaw != null) {
    var people = JSON.parse(peopleRaw)
} else {
    var people = [];
}

function desenhaTabela() {
    currentLines = [...document.querySelectorAll('table.lista tbody .dinamic-content')];
    currentLines.forEach((element) => {
        element.remove()
    })

    //Person vai ser a chave, people vai ser a lista(array)
    //Na parte de XP, como é utilizado um Boolean, é necessário criar uma estrutura IF in line. Ou seja, primeiro a condição, depois de ? se for true e : se for false.
    for (person in people) {
        document.querySelector('table.lista tbody').innerHTML += 
        `<tr class="dinamic-content" style="background-color: ${((person % 2 == 0) ? '#fff' : '#eee')}">
        <td>${people[person].name}</td>
        <td>${people[person].tel}</td>
        <td>${(people[person].xp ? '<strong style="color:green">Sim</strong>' : '<strong style="color:red">Não</strong>')}</td>
        <td>
            <button onclick="deleteUser(${person})">Excluir</button>
            <a href="./src/form.html?person=${person}">Editar</a>
        </td>
        </tr>`
    };
};

function deleteUser(p) {
    people.splice(p, 1); 
    desenhaTabela(); 
    localStorage.setItem('people' , JSON.stringify(people));
}
desenhaTabela()
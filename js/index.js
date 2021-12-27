const BASE_URL = 'http://localhost:3000/monsters'

fetchMonsters();
createForm();

function fetchMonsters() {
fetch(BASE_URL)
    .then(res => res.json())
    .then(monsters => monsters.forEach(displayMonsters))
}

function postMonsters(monster) {
    fetch(BASE_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(monster)
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

function displayMonsters(monsterObj) {
    const monsterContainer = document.getElementById('monster-container')
    const name = document.createElement('h2')
    const age = document.createElement('h4')
    const description = document.createElement('p')

    name.innerText = monsterObj.name 
    age.innerText = monsterObj.age
    description.innerText = monsterObj.description

    monsterContainer.appendChild(name)
    monsterContainer.appendChild(age)
    monsterContainer.appendChild(description)
}

function createForm() {
    const formDiv = document.getElementById('create-monster')
    const form = document.createElement('form')
    form.id = "monster-form"

    const nameInput = document.createElement('input')
    nameInput.type = "text"
    nameInput.placeholder = "Name"
    nameInput.id = ('name-input')

    const ageInput = document.createElement('input')
    ageInput.type = "text"
    ageInput.placeholder = "Age"
    ageInput.id = ('age-input')

    const descInput = document.createElement('input')
    descInput.type = "text"
    descInput.placeholder = "Description"
    descInput.id = ('desc-input')

    const submitInput = document.createElement('input')
    submitInput.textContent = "Create"
    submitInput.type = "submit"
    submitInput.id = "submit-btn"

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const newMonsterObj = {
            name: nameInput.value,
            age: ageInput.value,
            description: descInput.value
        }
        displayMonsters(newMonsterObj);
        postMonsters(newMonsterObj)
    
    })
    formDiv.appendChild(form)
    form.append(nameInput, " " , ageInput, " ", descInput, " ", submitInput)
}






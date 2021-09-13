const BASE_URL = 'https://swapi.dev/api/people'

function getData( query, cb) {
    fetch(`${BASE_URL}?${query}`)
    .then(res => res.json())
    .then(r => cb(r))
}






const persons = document.querySelector('.persons')
const block = document.querySelector('.block')


persons.addEventListener('click' , r =>{
    r.preventDefault();

    getData('people' , res =>{
        console.log(res.results);
        const card = res.results.map(item =>{
            return`
                <div class="card_body">
                    <h3>Name: ${item.name}</h3>
                    <h4>Height: ${item.height}</h4>
                    <h4>Birth year: ${item.birth_year}</h4>
                    <h4>Eye color: ${item.eye_color}</h4>
                    <h4>Hair color: ${item.hair_color}</h4>
                    <h4>Skin_color: ${item.skin_color}</h4>
                    <h4>Gender: ${item.gender}</h4>
                </div>
            `
        }).join('')

        block.innerHTML = card
    })
})







const planets = document.querySelector('.planets')


planets.addEventListener('click' , r =>{
    r.preventDefault();

    getData('planets' , res =>{
        console.log(res.results);
        const card = res.results.map(item =>{
            return`
                <div class="card_body2">
                    <h3>Name: ${item.name}</h3>
                    <h4>Rotation_period: ${item.rotation_period}</h4>
                    <h4>Orbital_period: ${item.orbital_period}</h4>
                    <h4>Diameter: ${item.diameter}</h4>
                    <h4>Climate: ${item.climate}</h4>
                    <h4>Gravity: ${item.gravity}</h4>
                    <h4>Terrain: ${item.terrain}</h4>
                </div>
            `
        }).join('')

        block.innerHTML = card
    })
})







const starships = document.querySelector('.starships')

starships.addEventListener('click' , r=>{
    r.preventDefault();

    getData('starships', res=>{
        console.log(res.results);
        const card = res.results.map(item =>{
            return`
            <div class="card_body3">
                    <h3>Name: ${item.name}</h3>
                    <h4>Model: ${item.model}</h4>
                    <h4>:Manufacturer ${item.manufacturer}</h4>
                    <h4>:Cost_in_credits ${item.cost_in_credits}</h4>
                    <h4>:Length ${item.length}</h4>
                    <h4>:Crew ${item.crew}</h4>
                    <h4>:MGLT ${item.MGLT}</h4>
                </div>
            `
        }).join('')

        block.innerHTML = card
    })
})
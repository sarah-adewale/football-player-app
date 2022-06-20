document.querySelector('.btn').addEventListener('click', apiRequest)

async function apiRequest(){
    const playerName = document.querySelector('#input').value
    try{
        const response = await fetch(`https://footbal-players-api-100devs.herokuapp.com/api/${playerName}`)
        const data = await response.json()
        console.log(data.name)

        document.getElementById('playerName').innerText = data.name
        document.getElementById('playerAge').innerText = data.age
        document.getElementById('playerPosition').innerText = data.position
        document.getElementById('playerCareer').innerText = data.careerGoals
        document.getElementById('playerClub').innerText = data.club
        document.getElementById('playerAge').innerText = data.Nationality

        document.getElementById('playerImage').src = data.image
    }catch(error){
        console.error(error)
    }

}
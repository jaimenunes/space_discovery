fetch("./data.json")
.then(response => {
   return response.json();
})
.then(data => {
    planet(data.destinations) //Get destinations data from json file
});

//Get the node from destination page
const planetList = document.querySelector('#list-planet')
const planetTitle = document.querySelector('#planet-title')
const planetImage = document.querySelector('#planet-image')
const planetDescription = document.querySelector('#planet-description')
const planetDistance = document.querySelector('#planet-distance')
const planetTime = document.querySelector('#planet-time')


function planet(data){
    planetList.addEventListener('click', (e) =>{
        const id = e.target.id //get the ID from planet that user clik 
        if(id == 0){ // check ID
            let moonMenu = document.getElementById(`${id}`)
            let marsMenu = document.getElementById(`1`)
            let europaMenu = document.getElementById(`2`)
            let titanMenu = document.getElementById(`3`)
            //add the class active where the use cliked
            marsMenu.classList.remove('active')
            moonMenu.classList.add('active')
            europaMenu.classList.remove('active')
            titanMenu.classList.remove('active')
            //Pass the data form json to html page
            planetTitle.innerHTML = data[id].name
            planetDescription.innerHTML = data[id].description
            planetImage.src = 'assets/destination/image-moon.png'
            planetDistance.innerHTML = data[id].distance
            planetTime.innerHTML= data[id].travel
        } else if(id == 1){
            let moonMenu = document.getElementById(`0`)
            let marsMenu = document.getElementById(`${id}`)
            let europaMenu = document.getElementById(`2`)
            let titanMenu = document.getElementById(`3`)
            marsMenu.classList.add('active')
            moonMenu.classList.remove('active')
            europaMenu.classList.remove('active')
            titanMenu.classList.remove('active')
            planetTitle.innerHTML = data[id].name
            planetDescription.innerHTML = data[id].description
            planetImage.src = 'assets/destination/image-mars.png'
            planetDistance.innerHTML = data[id].distance
            planetTime.innerHTML= data[id].travel
        }
        else if(id == 2){
            let moonMenu = document.getElementById(`0`)
            let marsMenu = document.getElementById(`1`)
            let europaMenu = document.getElementById(`${id}`)
            let titanMenu = document.getElementById(`3`)
            marsMenu.classList.remove('active')
            moonMenu.classList.remove('active')
            europaMenu.classList.add('active')
            titanMenu.classList.remove('active')
            planetTitle.innerHTML = data[id].name
            planetDescription.innerHTML = data[id].description
            planetImage.src = 'assets/destination/image-europa.png'
            planetDistance.innerHTML = data[id].distance
            planetTime.innerHTML= data[id].travel
        }
        else if(id == 3){
            let moonMenu = document.getElementById(`0`)
            let marsMenu = document.getElementById(`1`)
            let europaMenu = document.getElementById(`2`)
            let titanMenu = document.getElementById(`${id}`)
            marsMenu.classList.remove('active')
            moonMenu.classList.remove('active')
            europaMenu.classList.remove('active')
            titanMenu.classList.add('active')
            planetTitle.innerHTML = data[id].name
            planetDescription.innerHTML = data[id].description
            planetImage.src = 'assets/destination/image-titan.png'
            planetDistance.innerHTML = data[id].distance
            planetTime.innerHTML= data[id].travel
        }
    })
}


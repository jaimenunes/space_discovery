fetch("./data.json")
.then(response => {
   return response.json();
})
.then(data => {
    crew(data.crew)
});

const list = document.querySelector('.crew-list')
const crewName = document.querySelector("#crew-title")
const crewBio = document.querySelector("#crew-description")
const crewRole = document.querySelector("#crew-job")
const crewImage = document.querySelector("#crew-image")

function crew(data){
    list.addEventListener('click', (e)=>{
        const id=e.target.id
        if(id === ''){
            e.preventDefault()
        }else{
            const first = document.getElementById('0')
            const second = document.getElementById('1')
            const third = document.getElementById('2')
            const fourth = document.getElementById('3')
            crewName.innerHTML = data[id].name
            crewBio.innerHTML = data[id].bio
            crewRole.innerHTML = data[id].role
            crewImage.src = `${data[id].images.png}`
            switch(id){
                case '0':
                    first.classList.add('active-list')
                    second.classList.remove('active-list')
                    third.classList.remove('active-list')
                    fourth.classList.remove('active-list')
                    break
                case '1':
                    first.classList.remove('active-list')
                    second.classList.add('active-list')
                    third.classList.remove('active-list')
                    fourth.classList.remove('active-list')
                    break
                case '2':
                    first.classList.remove('active-list')
                    second.classList.remove('active-list')
                    third.classList.add('active-list')
                    fourth.classList.remove('active-list')
                    break
                case '3':
                    first.classList.remove('active-list')
                    second.classList.remove('active-list')
                    third.classList.remove('active-list')
                    fourth.classList.add('active-list')
                    break
            }
        }
    })
}
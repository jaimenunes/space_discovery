fetch("./data.json")
.then(response => {
   return response.json();
})
.then(data => {
    technology(data.technology)
});

const tecList = document.getElementById('tec-list')
const tecName = document.getElementById('tec-title')
const tecImage = document.getElementById('image1')
const tecImageTablet = document.getElementById('image2')
const tecDesc = document.getElementById('tec-description')

function technology(data){
    tecList.addEventListener('click', (e)=>{
        const id = e.target.id
        let first = document.getElementById('0')
        let second = document.getElementById('1')
        let third = document.getElementById('2')

        if(id === 'tec-list'){
            e.preventDefault()
        }
        else{
            tecName.innerHTML = data[id].name
            tecImage.src = data[id].images.portrait
            tecImageTablet.src= data[id].images.landscape
            tecDesc.innerHTML = data[id].description

            switch(id){
                case '0':
                    first.classList.add('active-tec')
                    second.classList.remove('active-tec')
                    third.classList.remove('active-tec')
                    break

                case '1':
                    first.classList.remove('active-tec')
                    second.classList.add('active-tec')
                    third.classList.remove('active-tec')
                    break

                case '2':
                    first.classList.remove('active-tec')
                    second.classList.remove('active-tec')
                    third.classList.add('active-tec')
                    break
            }
        }
    })
}

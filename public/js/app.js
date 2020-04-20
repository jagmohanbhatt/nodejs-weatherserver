console.log('client side java script loaded here!!!')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')

weatherForm.addEventListener('submit', (e)=>{
    console.log('submitted!!!')
    e.preventDefault()

    const location = search.value
    p1.textContent = "loading..."
    fetch('http://api.weatherstack.com/current?access_key=606e0d2c0c4bfe84fcc89b9f2a5722f9&query=' + location).then((res) => {

    res.json().then((data) => {
        if(data.error){
            console.location(data.error)
        }

            console.log(data.current)
            p1.textContent = data.current.wind_speed

        })
    })
})
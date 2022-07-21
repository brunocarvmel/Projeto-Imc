const name = localStorage.getItem('name') //usando o localStorage para mostrar as variaveis'
const weight = localStorage.getItem('weight')
const height = localStorage.getItem('height')

const box = document.querySelector('.box')
const imc = weight/Math.pow(height,2)

box.innerHTML = `
<h2> Nome:  ${name} </h2>
<h2> Peso: ${weight} Kg</h2>
<h2> Altura: ${height} metros</h2>
<h2> IMC: ${imc.toFixed(2)} </h2>
`

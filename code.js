const button = document.querySelector('.button') //está pegando todo o conteúdo da tag button

button.addEventListener('click', sla) //quando o click for efetuado ele vai executar a função sla

function sla() {
  const name = document.querySelector('#name')
  const weight = document.querySelector('#weight')
  const height = document.querySelector('#height')

  console.log(name.value)
  console.log(weight.value)
  console.log(height.value)

  localStorage.setItem('name', name.value)
  localStorage.setItem('weight', weight.value)
  localStorage.setItem('height', height.value)

  window.location.href = '/result.html'
}

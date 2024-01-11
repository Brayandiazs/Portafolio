const scriptURL = 'https://script.google.com/macros/s/AKfycbxtqaryvsaSKQgeLyo9Ns36ZqDWdYSQso56d8oPjQhF_KsPQ_7HDHd0B__VyL-XSXLEZg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Gracias, su formulario se envio correctamente." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
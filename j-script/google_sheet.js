const scriptURL = 'https://script.google.com/macros/s/AKfycbxCMEt4dIzouzoqBTjyUjzQ9qFlajrl312KBQndjRjgZLtl84A3FDW6Ah6OkF2ha-BK/exec'

let form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault() 
  
          
         
fetch(scriptURL, { method: 'POST', body: new FormData(form)})

  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))


})

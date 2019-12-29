const weatherForm=document.querySelector('form')
const searchBox=document.querySelector('input')
const message1=document.querySelector('#msg-1')
const message2=document.querySelector('#msg-2')

weatherForm.addEventListener('submit',(e) => {
    e.preventDefault()
    const location=searchBox.value
    fetch('/weather?address='+location).then((response)=> {
        response.json().then((data) =>{
            if(data.error){
                message2.textContent=data.error
            }else{
                message1.textContent=data.location+"\n"+data.forecast
                console.log(data.location)
                console.log(data.forecast)
            }
            
        })

    })
})


function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('modal__overlay--loading')
    const success = document.querySelector('modal__overlay--success')
    loading.classList += " modal__overlay--visible"   
    emailjs
        .sendForm(
            'service_743rodq', 
            'template_zlb55xt',
            event.target,
            'WXvEnGx4Mrm0_Ldu7'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly on cecrudbro@gmail.com"
        )  
    })
}
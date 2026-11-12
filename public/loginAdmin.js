document.getElementById('admin').addEventListener('submit', function (event) {
    event.preventDefault()

    let email = document.getElementById('nome').value
    let senha = document.getElementById('senha').value

    if (email == 'admin.netflix@gmail.com' && senha == 'admin123') {
        window.location.href = 'admin.html'
    } else {
        alert('Email/senha de administrador incorretos!')
    }
})
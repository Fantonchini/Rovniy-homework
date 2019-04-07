
let validate = (form) => {
    form.preventDefault();
    console.log(JSON.stringify({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        telephone: document.getElementById('telephone').value,
        message: document.getElementById('message').value
    }))
};


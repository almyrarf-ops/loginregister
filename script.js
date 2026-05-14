localStorage.clear();

const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

function goLogin() {

    const username = document.getElementById("loginUsername").value;

    const password = document.getElementById("loginPassword").value;

    const savedUsername = localStorage.getItem("username");

    const savedPassword = localStorage.getItem("password");

    // kalau belum pernah register sama sekali
    if (savedUsername === null || savedPassword === null) {

        alert("Belum punya akun! Silakan register.");

        container.classList.add('active');

        return;
    }

    // username belum terdaftar
    if (username !== savedUsername) {

        alert("Username belum terdaftar!");

        container.classList.add('active');

        return;
    }

    // password salah
    if (password !== savedPassword) {

        alert("Password salah!");

        return;
    }

    // login berhasil
    alert("Login berhasil!");
}

function goRegister() {

    const username = document.getElementById("registerUsername").value;

    const email = document.getElementById("registerEmail").value;

    const password = document.getElementById("registerPassword").value;

    // simpan ke localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registrasi berhasil!");
}

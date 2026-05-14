localStorage.clear();

const container = document.querySelector('.container');
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

    // ambil input login
    const username = document.getElementById("loginUsername").value;

    const password = document.getElementById("loginPassword").value;

    // ambil data dari localStorage
    const savedUsername = localStorage.getItem("username");

    const savedPassword = localStorage.getItem("password");

    // cek apakah akun ada
    if (savedUsername === null || savedPassword === null) {

        alert("Akun belum terdaftar! Silakan register terlebih dahulu.");

        // pindah ke register
        container.classList.add('active');

        return;
    }

    // cek username & password
    if (username !== savedUsername) {

    alert("Username belum terdaftar!");

    container.classList.add('active');

    } else if (password !== savedPassword) {

    alert("Password salah!");

    } else {

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

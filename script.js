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

    console.log(username);
    console.log(password);

    alert("Login berhasil");
}

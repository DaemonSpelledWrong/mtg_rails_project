const loginForm = document.getElementById('login-submission');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  emailSubmission = document.getElementById('email');
  passwordSubmission = document.getElementById('password');

  fetch('http://localhost:3000/authenticate', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      email: emailSubmission.value,
      password: passwordSubmission.value
    })
  })
    .then(response => response.json())
    .then(token => localStorage.setItem('auth_token', `${token.auth_token}`));
});

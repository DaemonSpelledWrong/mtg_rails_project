import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  currentMainContent
);

window.addEventListener('DOMContentLoaded', () => {
  console.log('ready for action');
})

const currentMainContent = document.querySelector('main');
const loginForm = document.getElementById('login-submission');
const loginButton = document.getElementById('login-button');
const logoutButton = document.getElementById('logout-button');
const signupButton = document.getElementById('signup-submission');








loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailSubmission = document.getElementById('login-email');
  const passwordSubmission = document.getElementById('login-password');

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

signupButton.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailSubmission = document.getElementById('signup-email');
  const passwordSubmission = document.getElementById('signup-password');
  const passwordConfirmationSubmission = document.getElementById('signup-password_confirmation');

  fetch('http://localhost:3000/registration', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      email: emailSubmission.value,
      password: passwordSubmission.value,
      password_confirmation: passwordConfirmationSubmission.value
    })
  })
})

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  destroyPreviousContent();
  
});

logoutButton.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem('auth_token')
})







function destroyPreviousContent() {
  loginForm.style.display = 'none';
};

function renderHome() {

};

function loginRender() {
  
};

function signupRender() {

};
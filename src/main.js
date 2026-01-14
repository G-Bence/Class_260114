const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function(event) {
  event.preventDefault();

  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (nameValue === '' || emailValue === '' || passwordValue === '') {
    alert('Please fill in all fields.');
    return;
  }

  name.value = '';
  email.value = '';
  password.value = '';

  alert(`Thank you for signing up, ${nameValue}!`);
});
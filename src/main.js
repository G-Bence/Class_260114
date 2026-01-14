const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');
const alertBox = document.getElementById('alertBox');
const alertMessage = document.getElementById('alertMessage');
const closeAlertBtn = document.getElementById('closeAlertBtn');

alertBox.classList.add('d-none');

closeAlertBtn.addEventListener('click', async function() {
  alertBox.classList.add('d-none');
});

submitBtn.addEventListener('click', function(event) {
  event.preventDefault();

  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (nameValue === '' || emailValue === '' || passwordValue === '') {
    console.log('Please fill in all fields.');
    alertBox.classList.remove('alert-success');
    alertBox.classList.add('alert-failure');
    alertMessage.textContent = 'Please fill in all fields.';
    alertBox.classList.remove('d-none');
    setTimeout(() => {
      alertBox.classList.add('d-none');
    }, 2500);
    return;
  }

  name.value = '';
  email.value = '';
  password.value = '';

  alertBox.classList.remove('alert-failure');
  alertBox.classList.add('alert-success');
  alertMessage.textContent = 'Thank you for signing up!';
  alertBox.classList.remove('d-none');


  setTimeout(() => {
    alertBox.classList.add('d-none');
  }, 2500);
});
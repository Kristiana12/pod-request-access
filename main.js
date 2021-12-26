const form = document.querySelector('.podcast__form');
const submitBtn = document.querySelector('.podcast__form--btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

//Check if email is valid
const isValid = (email) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

//Wrong email
const wrongEmailInserted = () => {
  form.classList.add('error');
  email.setAttribute('aria-invalid', 'true');
  email.setAttribute('placeholder', 'john@mail.com');
  email.setAttribute('aria-invalid', 'true');
};

submitBtn.addEventListener('click', () => {
  const email = document.getElementById('email');
  const emailValue = email.value;
  if (emailValue === '') {
    wrongEmailInserted();
  } else if (!isValid(emailValue)) {
    wrongEmailInserted();
  } else {
    form.style.display = 'none';
    form.classList.add('success');
    email.setAttribute('aria-invalid', 'false');
  }
});

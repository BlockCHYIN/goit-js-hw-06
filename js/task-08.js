const form = document.querySelector('.login-form');
const btn = form.querySelector("button");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

      const email = event.currentTarget.elements.email.value;
  const value = event.currentTarget.elements.password.value;

  if ((email && value) === "") {
    return alert("Все поля должны быть заполнены!");
  }
  const formData = {
    email,
    value,
  };
  console.log(formData);
  form.reset();
};

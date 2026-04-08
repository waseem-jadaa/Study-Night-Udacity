
const showError = (message) => {
  const form = document.querySelector("form");
  const existingError = document.querySelector(".error");

  if (!existingError) {
    const error = document.createElement("p");
    error.textContent = message;
    error.style.color = "red";
    error.className = "error";
    error.setAttribute("data-cy", "create-set-error-message");
    form.appendChild(error);
  } else if (existingError.textContent !== message) {
    existingError.textContent = message;
  }
};

export { showError };

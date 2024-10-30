
// script.js

document.addEventListener("DOMContentLoaded", () => {
  const avatar = document.querySelector(".avatar");
  if (avatar) {
    avatar.addEventListener("click", () => {
      alert("Avatar clicked!");
    });
  }
});

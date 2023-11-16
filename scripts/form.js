const forms = document.querySelectorAll("form");
forms.forEach((f) => {
  f.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(f);
    document.querySelector("#form-data").textContent = JSON.stringify(
      Object.fromEntries(data)
    );
  });
});

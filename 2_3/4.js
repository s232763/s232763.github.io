const forms = document.querySelectorAll("form");
forms.forEach((f) => {
  f.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(f);

    const keys = [...data.keys()];
    const values = [...data.values()].map((v) =>
      v instanceof File ? v.name : v
    );
    const output = keys.map((k, i) => `${k}: ${values[i]}`);

    document.querySelector("#form-data").textContent = output.join("\n");
  });
});

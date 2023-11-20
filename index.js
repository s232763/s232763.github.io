const tasks = [
  {
    path: "2.1.3",
    title: "Erste HTML Seite",
    date: "2023-11-09T11:21:57Z",
  },
  {
    path: "2.1.5",
    title: "Kreative HTML Seite",
    date: "2023-11-09T11:07:57Z",
  },
  {
    path: "2.2.3",
    title: "Geographie",
    date: "2023-11-14T13:13:21Z",
  },
  { path: "2.3.4", title: "Passierschein A38", date: "2023-11-16T11:15:57Z" },
]
  .reverse()
  .map((t) => ({ ...t, date: new Date(t.date) }));

const taskList = document.querySelector(".task-list");
const template = document.querySelector("#task-template");
for (const task of tasks) {
  const clone = template.content.cloneNode(true);
  clone.querySelector("h2").textContent = `${task.path} | ${task.title}`;

  const anchor = clone.querySelector("a");
  const taskPath = task.path.split(".");
  const path = `${taskPath[0]}_${taskPath[1]}/${taskPath[2]}.html`;
  anchor.href = path;

  const date = task.date.toISOString().slice(0, 10);
  clone.querySelector("p").textContent = `Added on ${date}`;

  clone.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    window.open(
      `https://github.com/s232763/s232763.github.io/blob/main/${path}`
    );
  });
  anchor.setAttribute("data-id", task.path);

  taskList.appendChild(clone);
}

document.querySelector("input").addEventListener("input", (e) => {
  const searchTerm = e.currentTarget.value;
  search(searchTerm);
});

search("");

function search(term) {
  let foundElements = 0;
  for (const task of tasks) {
    const element = document.querySelector(`[data-id="${task.path}"]`);
    if (
      task.title.toLowerCase().includes(term.toLowerCase()) ||
      task.path.includes(term.toLowerCase())
    ) {
      element.classList.remove("hidden");
      foundElements++;
    } else {
      element.classList.add("hidden");
    }
  }

  const noFoundElem = document.querySelector("#no-tasks");
  if (foundElements === 0) {
    noFoundElem.classList.remove("hidden");
  } else {
    noFoundElem.classList.add("hidden");
  }
}

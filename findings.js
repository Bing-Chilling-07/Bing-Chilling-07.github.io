const findings = [
  "A fascinating blog post",
  "An obscure math trick",
  "A cool GitHub repo",
  "A design pattern reference",
  "Some crypto fact",
  "Another cool article",
  "Quantum weirdness",
  "Useful terminal tricks",
  "CSS secrets list",
  "Neural net visualizer",
  "One more post",
  "Cool open source UI",
  "Historical fact",
  "Compiler visual playground"
];

const itemsPerPage = 5;
let currentPage = 1;

function renderList(page) {
  const list = document.getElementById("findings-list");
  list.innerHTML = "";

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const items = findings.slice(start, end);

  items.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#">${item}</a>`;
    list.appendChild(li);
  });

  renderPagination(page);
}

function renderPagination(current) {
  const totalPages = Math.ceil(findings.length / itemsPerPage);
  const pagDiv = document.getElementById("pagination");
  pagDiv.innerHTML = "";

  const btn = (text, targetPage, disabled = false) => {
    const b = document.createElement("button");
    b.innerText = text;
    if (!disabled) {
      b.onclick = () => {
        currentPage = targetPage;
        renderList(currentPage);
      };
    } else {
      b.disabled = true;
    }
    pagDiv.appendChild(b);
  };

  btn("<<", 1, current === 1);
  btn("<", current - 1, current === 1);

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - current) <= 1) {
      btn(i, i, false);
    } else if (
      i === current - 2 ||
      i === current + 2
    ) {
      const dots = document.createElement("span");
      dots.innerText = "...";
      pagDiv.appendChild(dots);
    }
  }

  btn(">", current + 1, current === totalPages);
  btn(">>", totalPages, current === totalPages);
}

renderList(currentPage);

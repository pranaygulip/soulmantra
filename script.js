const quotes = [
  "When everything falls apart... time fills all the betrayed gaps.",
  "Love is not about how many days... every single day.",
  "Life doesn’t require that we be the best, only that we try our best."
];

const searchInput = document.getElementById("search");
const quotesContainer = document.getElementById("quotes");

function displayQuotes(list) {
  quotesContainer.innerHTML = "";
  list.forEach(quote => {
    const div = document.createElement("div");
    div.className = "quote-card";
    div.innerHTML = `<p>"${quote}"</p>`;
    quotesContainer.appendChild(div);
  });
}

searchInput.addEventListener("input", () => {
  const filtered = quotes.filter(q => q.toLowerCase().includes(searchInput.value.toLowerCase()));
  displayQuotes(filtered);
});

displayQuotes(quotes);

document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

new Typed('#typed', {
  strings: ["Ink That Heals, Words That Stay", "Quotes for Love and Life", "Let Your Soul Speak"],
  typeSpeed: 40,
  backSpeed: 30,
  loop: true
});

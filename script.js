const quotes = [
  { category: "Life", text: "When everything falls apart... time fills all the betrayed gaps." },
  { category: "Love", text: "Love is not about how many days... every single day." },
  { category: "Healing", text: "Life doesn’t require that we be the best, only that we try our best." }
];

const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("categoryFilter");
const quotesContainer = document.getElementById("quotes");

function displayQuotes(list) {
  quotesContainer.innerHTML = "";
  list.forEach((quote, index) => {
    const div = document.createElement("div");
    div.className = "quote-card";
    div.innerHTML = `
      <p>"${quote.text}"</p>
      <p style="font-size: 0.9rem; color: #aaa;">Category: ${quote.category}</p>
      <button class="like-button" onclick="likeQuote(${index})">❤️ <span id="like-count-${index}">0</span></button>
    `;
    quotesContainer.appendChild(div);
  });
}

function likeQuote(index) {
  const key = `like-${index}`;
  const current = localStorage.getItem(key) || 0;
  const updated = parseInt(current) + 1;
  localStorage.setItem(key, updated);
  document.getElementById(`like-count-${index}`).innerText = updated;
}

function filterQuotes() {
  const keyword = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const filtered = quotes.filter(q =>
    (category === "all" || q.category === category) &&
    q.text.toLowerCase().includes(keyword)
  );
  displayQuotes(filtered);
}

searchInput.addEventListener("input", filterQuotes);
categoryFilter.addEventListener("change", filterQuotes);

window.onload = () => {
  displayQuotes(quotes);
  quotes.forEach((_, idx) => {
    const count = localStorage.getItem(`like-${idx}`) || 0;
    const el = document.getElementById(`like-count-${idx}`);
    if (el) el.innerText = count;
  });
};

new Typed('#typed', {
  strings: ["Ink That Heals, Words That Stay", "Quotes for Love and Life", "Let Your Soul Speak"],
  typeSpeed: 40,
  backSpeed: 30,
  loop: true
});

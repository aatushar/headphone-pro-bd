const FB_PAGE = "headphone.com.bd";
const MESSENGER = "https://m.me/" + FB_PAGE;

const grid = document.getElementById("productGrid");
const filters = document.getElementById("filters");
const search = document.getElementById("search");
let activeCat = "All";

function orderLink(p) {
  return MESSENGER + "?ref=" + encodeURIComponent(p.id);
}

function card(p) {
  const price = p.price ? "৳ " + Number(p.price).toLocaleString("en-US") : "Message for price";
  const badge = p.badge ? `<span class="badge bg-danger position-absolute m-2">${p.badge}</span>` : "";
  return `
  <div class="col-6 col-md-4 col-lg-3">
    <a class="card product-card h-100 text-decoration-none" href="${orderLink(p)}" target="_blank" rel="noopener" title="Order on Messenger">
      ${badge}
      <img src="${p.image}" class="card-img-top" alt="${p.name}" loading="lazy">
      <div class="card-body d-flex flex-column">
        <small class="text-muted">${p.category}</small>
        <h3 class="h6 card-title text-dark my-1">${p.name}</h3>
        <div class="fw-bold text-primary mb-2">${price}</div>
        <span class="btn btn-primary btn-sm mt-auto"><i class="bi bi-messenger"></i> Order on Messenger</span>
      </div>
    </a>
  </div>`;
}

function render() {
  const q = search.value.trim().toLowerCase();
  const list = PRODUCTS.filter(p =>
    (activeCat === "All" || p.category === activeCat) &&
    (!q || (p.name + " " + p.category).toLowerCase().includes(q)));
  grid.innerHTML = list.length ? list.map(card).join("")
    : '<p class="text-center text-muted py-5">No products found.</p>';
}

function renderFilters() {
  const cats = ["All", ...new Set(PRODUCTS.map(p => p.category))];
  filters.innerHTML = cats.map(c =>
    `<button class="btn btn-sm ${c === activeCat ? "btn-dark" : "btn-outline-dark"}" data-cat="${c}">${c}</button>`).join("");
}

filters.addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b) return;
  activeCat = b.dataset.cat;
  renderFilters();
  render();
});
search.addEventListener("input", render);

document.querySelectorAll("[data-messenger]").forEach(a => (a.href = MESSENGER));
document.getElementById("year").textContent = new Date().getFullYear();
renderFilters();
render();

const FB_PAGE = "headphone.com.bd";
const MESSENGER = "https://m.me/" + FB_PAGE;

const grid = document.getElementById("productGrid");
const filters = document.getElementById("filters");
const search = document.getElementById("search");
const featuredBox = document.getElementById("featured");
const modalEl = document.getElementById("productModal");
const modal = new bootstrap.Modal(modalEl);
let activeCat = "All";

function orderLink(p) {
  return MESSENGER + "?ref=" + encodeURIComponent(p.id);
}

const WHATSAPP = "8801782691070";

function whatsappLink(p) {
  const msg = `Hello, I want to order: ${p.name}` + (p.price ? ` (৳ ${Number(p.price).toLocaleString("en-US")})` : "");
  return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg);
}

function priceHtml(p) {
  if (!p.price) return "Message for price";
  const old = p.oldPrice ? ` <small class="text-muted text-decoration-line-through fw-normal">৳ ${Number(p.oldPrice).toLocaleString("en-US")}</small>` : "";
  return "৳ " + Number(p.price).toLocaleString("en-US") + old;
}

function card(p) {
  const badge = p.badge ? `<span class="badge bg-danger position-absolute m-2">${p.badge}</span>` : "";
  return `
  <div class="col-6 col-md-4 col-lg-3">
    <div class="card product-card h-100" data-id="${p.id}" role="button" tabindex="0">
      ${badge}
      <img src="${p.image}" class="card-img-top" alt="${p.name}" loading="lazy">
      <div class="card-body d-flex flex-column">
        <small class="text-muted">${p.category}</small>
        <h3 class="h6 card-title text-dark my-1">${p.name}</h3>
        <div class="fw-bold text-primary mb-2">${priceHtml(p)}</div>
        <span class="btn btn-outline-primary btn-sm mt-auto">View details</span>
      </div>
    </div>
  </div>`;
}

function featuredCard(p) {
  return `
  <div class="featured-card row g-0 align-items-center" data-id="${p.id}" role="button" tabindex="0">
    <div class="col-md-5 featured-img"><img src="${p.image}" alt="${p.name}"></div>
    <div class="col-md-7 p-4 p-lg-5">
      <span class="badge bg-warning text-dark mb-2"><i class="bi bi-star-fill"></i> Featured</span>
      <h2 class="h3 fw-bold">${p.name}</h2>
      <p class="text-muted mb-3">${p.description}</p>
      <ul class="list-inline mb-3">${(p.features || []).slice(0, 4).map(f => `<li class="list-inline-item"><span class="badge text-bg-light border">${f}</span></li>`).join("")}</ul>
      <div class="fs-3 fw-bold text-primary mb-3">${priceHtml(p)}</div>
      <span class="btn btn-primary"><i class="bi bi-eye"></i> View details</span>
    </div>
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

function renderFeatured() {
  const f = PRODUCTS.filter(p => p.featured);
  featuredBox.innerHTML = f.map(featuredCard).join("");
}

function renderFilters() {
  const cats = ["All", ...new Set(PRODUCTS.map(p => p.category))];
  filters.innerHTML = cats.map(c =>
    `<button class="btn btn-sm ${c === activeCat ? "btn-dark" : "btn-outline-dark"}" data-cat="${c}">${c}</button>`).join("");
}

function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const imgs = [p.image, ...(p.gallery || [])];
  const specs = (p.specs || []).map(([k, v]) => `<tr><th class="fw-semibold text-muted">${k}</th><td>${v}</td></tr>`).join("");
  const feats = (p.features || []).map(f => `<li>${f}</li>`).join("");
  document.getElementById("productModalTitle").textContent = p.name;
  document.getElementById("productModalBody").innerHTML = `
    <div class="row g-4">
      <div class="col-md-6">
        <img id="mainImg" src="${imgs[0]}" class="img-fluid rounded w-100 modal-main" alt="${p.name}">
        ${imgs.length > 1 ? `<div class="d-flex gap-2 mt-2 flex-wrap">${imgs.map((s, i) =>
          `<img src="${s}" class="thumb${i ? "" : " active"}" alt="photo ${i + 1}">`).join("")}</div>` : ""}
      </div>
      <div class="col-md-6">
        <small class="text-muted">${p.category}</small>
        <div class="fs-3 fw-bold text-primary my-1">${priceHtml(p)}</div>
        ${p.description ? `<p>${p.description}</p>` : ""}
        ${feats ? `<h3 class="h6">Key features</h3><ul>${feats}</ul>` : ""}
        ${p.warranty ? `<p><i class="bi bi-shield-check text-success"></i> <strong>Warranty:</strong> ${p.warranty}</p>` : ""}
      </div>
    </div>
    ${specs ? `<h3 class="h6 mt-4">Specifications</h3><table class="table table-sm table-striped mb-0"><tbody>${specs}</tbody></table>` : ""}`;
  document.getElementById("productModalOrder").href = orderLink(p);
  document.getElementById("productModalWhatsapp").href = whatsappLink(p);
  modal.show();
}

modalEl.addEventListener("click", e => {
  const t = e.target.closest(".thumb");
  if (!t) return;
  document.getElementById("mainImg").src = t.src;
  modalEl.querySelectorAll(".thumb").forEach(x => x.classList.toggle("active", x === t));
});

function onOpen(e) {
  if (e.type === "keydown" && e.key !== "Enter") return;
  const c = e.target.closest("[data-id]");
  if (c) openProduct(c.dataset.id);
}
grid.addEventListener("click", onOpen);
grid.addEventListener("keydown", onOpen);
featuredBox.addEventListener("click", onOpen);
featuredBox.addEventListener("keydown", onOpen);

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
renderFeatured();
renderFilters();
render();

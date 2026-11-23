const products = [
  {id:1,name:"Oak Lounge Chair",category:"Living",price:18900,image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80",desc:"Solid oak · Natural finish"},
  {id:2,name:"Walnut Dining Table",category:"Dining",price:42500,image:"https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80",desc:"American walnut · 6 seater"},
  {id:3,name:"Minimal Side Table",category:"Living",price:8900,image:"https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=80",desc:"Hand-finished · Compact"},
  {id:4,name:"Wooden Serving Board",category:"Decor",price:1800,image:"https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=900&q=80",desc:"Natural teak · Handmade"},
  {id:5,name:"Classic Dining Chair",category:"Dining",price:7400,image:"https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80",desc:"Solid wood · Woven seat"},
  {id:6,name:"Sculpted Table Lamp",category:"Decor",price:5200,image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",desc:"Warm wood · Soft glow"}
];
let cartCount = 0;
const grid = document.getElementById("productGrid");
function renderProducts(category="All"){
  const shown = category === "All" ? products : products.filter(p => p.category === category);
  grid.innerHTML = shown.map(p => `
    <article class="product-card">
      <div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
      <div class="product-info"><div><h3>${p.name}</h3><p>${p.desc}</p></div><strong>₹${p.price.toLocaleString("en-IN")}</strong></div>
      <button class="add-btn" data-id="${p.id}">＋ ADD TO CART</button>
    </article>`).join("");
}
document.getElementById("filters").addEventListener("click", e => {
  const button = e.target.closest(".filter");
  if(!button) return;
  document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
  button.classList.add("active");
  renderProducts(button.dataset.category);
});
grid.addEventListener("click", e => {
  if(!e.target.matches(".add-btn")) return;
  cartCount++;
  document.getElementById("cartCount").textContent = cartCount;
  e.target.textContent = "✓ ADDED";
  setTimeout(() => e.target.textContent = "＋ ADD TO CART", 900);
});
document.getElementById("menuToggle").addEventListener("click", () => document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(link => link.addEventListener("click", () => document.getElementById("nav").classList.remove("open")));
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "Thank you! Your message has been received in this demo.";
  e.target.reset();
});
renderProducts();
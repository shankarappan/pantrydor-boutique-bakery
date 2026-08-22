import { useEffect, useState } from "react";
import {
  ArrowRight, Clock, EnvelopeSimple, FacebookLogo, InstagramLogo, Leaf, List,
  Grains, MapPin, Minus, Phone, Plus, ShoppingBag, UsersThree, X,
} from "@phosphor-icons/react";

const SHOP = "https://pantrydor.co.nz";
const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

const categories = [
  { eyebrow: "Catering & events", title: "Made for the table", copy: "Platters, bundles and beautiful food for offices, celebrations and everything in between.", image: asset("real-catering-grazing.jpg"), alt: "A real Pantry d'Or grazing box with sourdough, cheeses, fruit and cured meats", href: `${SHOP}/collections/catering-collection` },
  { eyebrow: "Pantry To Go", title: "Lunch, beautifully packed", copy: "Fresh lunches and everyday favourites, packed and ready when you are.", image: asset("real-lunch-pack.jpg"), alt: "A real Pantry d'Or packed lunch with sandwich, fruit, juice and a biscuit", href: `${SHOP}/collections/pantry-packed-lunches` },
  { eyebrow: "Artisan breads", title: "The daily bake", copy: "Sourdoughs, croissants and seasonal bakes, handcrafted in small batches.", image: asset("real-artisan-sourdough.jpg"), alt: "A freshly baked Pantry d'Or sourdough loaf on a wooden board", href: `${SHOP}/collections/artisanal-breads` },
];

const collections = [
  {
    id: "catering",
    tab: "Catering & platters",
    eyebrow: "Gather beautifully",
    title: "A table worth gathering around.",
    copy: "Generous platters and complete packages, composed for meetings, celebrations and shared moments.",
    count: "23 choices",
    image: asset("real-catering-grazing.jpg"),
    alt: "A real Pantry d'Or grazing box with breads, cheeses, fruit and charcuterie",
    href: `${SHOP}/collections/catering-collection`,
    products: [
      { title: "Office Favorites Bundle", price: "$187", copy: "A complete spread for the working table.", href: `${SHOP}/products/office-favorites-bundle` },
      { title: "Morning Tea Complete Bundle", price: "$239", copy: "Sweet, savoury and ready to share.", href: `${SHOP}/products/morning-tea-complete-bundle` },
      { title: "Premium Corporate Package", price: "$343", copy: "An elevated package for larger occasions.", href: `${SHOP}/products/premium-corporate-package` },
      { title: "Artisan Breakfast Box", price: "$58", copy: "A thoughtful start for teams and guests.", href: `${SHOP}/products/breakfast-quiche-box` },
      { title: "Grazing Deli Platter", price: "$189", copy: "Artisan cheeses, charcuterie and accompaniments.", href: `${SHOP}/products/grazing-deli-platter` },
    ],
  },
  {
    id: "lunches",
    tab: "Pantry To Go",
    eyebrow: "Lunch, sorted",
    title: "Beautifully packed. Ready when you are.",
    copy: "Freshly made packed lunches for workshops, team days and people with somewhere delicious to be.",
    count: "5 choices",
    image: asset("real-lunch-pack.jpg"),
    alt: "A real Pantry d'Or packed lunch with sandwich, fruit, juice and a biscuit",
    href: `${SHOP}/collections/pantry-packed-lunches`,
    products: [
      { title: "Chicken Salad Sandwich Packed Lunch", price: "$22", copy: "A fresh, satisfying individual lunch.", href: `${SHOP}/products/chicken-philly-sourdough-packed-lunch` },
      { title: "Ham Gherkin Slaw Packed Lunch", price: "$20", copy: "Classic flavours with crisp house slaw.", href: `${SHOP}/products/bacon-bagel-bagged-lunch` },
      { title: "BLT Sammy Packed Lunch", price: "$22", copy: "A generous café favourite, packed to go.", href: `${SHOP}/products/bacon-egg-croissant-packed-lunch` },
      { title: "Vegetarian Packed Lunch", price: "$20", copy: "A colourful meat-free lunch option.", href: `${SHOP}/products/avo-smash-bagel` },
      { title: "Gluten Free Vegetarian Packed Lunch", price: "$26", copy: "A considered gluten-free vegetarian choice.", href: `${SHOP}/products/gluten-free-chicken-and-avocado-sammy` },
    ],
  },
  {
    id: "breads",
    tab: "Artisan breads",
    eyebrow: "From the oven",
    title: "The daily bake, made slowly.",
    copy: "Naturally leavened loaves and buttery favourites, made in small batches for the everyday table.",
    count: "7 choices",
    image: asset("real-artisan-sourdough.jpg"),
    alt: "A freshly baked Pantry d'Or sourdough loaf on a wooden board",
    href: `${SHOP}/collections/artisanal-breads`,
    products: [
      { title: "Spelt Sourdough", price: "$11.50", copy: "Wholesome spelt with a beautifully open crumb.", href: `${SHOP}/products/wholegrain-sour-dough` },
      { title: "Croissant 4 Pack", price: "$22", copy: "Four flaky, golden pastries for sharing.", href: `${SHOP}/products/croissant` },
      { title: "Plain Sourdough", price: "$10", copy: "Crisp crust, open crumb and quiet tang.", href: `${SHOP}/products/sesame-barley-sourdough` },
      { title: "Megaseed Country Loaf", price: "$7.50", copy: "A hearty loaf rich with grains and seeds.", href: `${SHOP}/products/low-gi-malted-mega-seed-loaf` },
      { title: "Seeded Sourdough", price: "$12.50", copy: "A nourishing seeded loaf with deep flavour.", href: `${SHOP}/products/roasted-seed-spelt-sourdough` },
    ],
  },
];

function ArrowLink({ href, children, className = "", onClick }) {
  return <a className={`arrow-link ${className}`} href={href} onClick={onClick}><span>{children}</span><ArrowRight aria-hidden="true" weight="light" /></a>;
}

function AppHeader({ cartCount, onCart, menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const close = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Pantry d'Or home"><img src={asset("pantrydor-crest-transparent.png")} alt="Pantry d'Or Boutique Bakery" /></a>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="#shop">Shop</a><a href="#catering">Catering</a><a href="#craft">Our craft</a><a href="#visit">Visit</a></nav>
      <button className="menu-toggle" type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><List aria-hidden="true" /></button>
      <button className="cart-button" type="button" onClick={onCart} aria-label={`Open cart, ${cartCount} items`}><ShoppingBag aria-hidden="true" weight="light" /><span>{cartCount}</span></button>
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <button type="button" onClick={close} aria-label="Close menu"><X aria-hidden="true" /></button>
        <nav aria-label="Mobile navigation"><a href="#shop" onClick={close}>Shop</a><a href="#catering" onClick={close}>Catering</a><a href="#craft" onClick={close}>Our craft</a><a href="#visit" onClick={close}>Visit</a></nav>
        <p>201 Ranolf Street, Rotorua<br />Open daily, 6:00am–2:30pm</p>
      </div>
    </header>
  );
}

function CartDrawer({ open, items, onClose, updateQuantity }) {
  const total = items.reduce((sum, item) => sum + item.quantity * Number(item.price.replace(/[^0-9.]/g, "")), 0);
  return (
    <>
      <button className={`drawer-backdrop ${open ? "is-open" : ""}`} onClick={onClose} aria-label="Close cart" />
      <aside className={`cart-drawer ${open ? "is-open" : ""}`} aria-hidden={!open} aria-label="Shopping cart">
        <div className="drawer-header"><div><span className="eyebrow">Your order</span><h2>Cart</h2></div><button type="button" onClick={onClose} aria-label="Close cart"><X aria-hidden="true" /></button></div>
        {items.length === 0 ? (
          <div className="empty-cart"><ShoppingBag aria-hidden="true" weight="light" /><p>Your cart is ready for something delicious.</p><button type="button" onClick={onClose}>Keep browsing</button></div>
        ) : (
          <><div className="drawer-items">{items.map((item) => (
            <div className="drawer-item" key={item.title}><img src={item.image} alt="" /><div><h3>{item.title}</h3><p>{item.price}</p><div className="quantity" aria-label={`Quantity for ${item.title}`}><button type="button" onClick={() => updateQuantity(item.title, -1)} aria-label="Decrease quantity"><Minus /></button><span>{item.quantity}</span><button type="button" onClick={() => updateQuantity(item.title, 1)} aria-label="Increase quantity"><Plus /></button></div></div></div>
          ))}</div><div className="drawer-total"><div><span>Estimated total</span><strong>${total.toFixed(2)}</strong></div><p>Taxes included. Lead time depends on your order.</p><a className="button button-gold" href={`${SHOP}/cart`}>Continue on Pantry d’Or <ArrowRight /></a></div></>
        )}
      </aside>
    </>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [activeCollection, setActiveCollection] = useState(collections[0].id);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const selectedCollection = collections.find((collection) => collection.id === activeCollection) ?? collections[0];

  const addItem = (product) => {
    setItems((current) => {
      const existing = current.find((item) => item.title === product.title);
      if (existing) return current.map((item) => item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item);
      return [...current, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };
  const updateQuantity = (title, delta) => setItems((current) => current.map((item) => item.title === title ? { ...item, quantity: item.quantity + delta } : item).filter((item) => item.quantity > 0));

  return (
    <div id="top" className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <section className="hero">
        <AppHeader cartCount={cartCount} onCart={() => setCartOpen(true)} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="hero-copy"><p className="eyebrow">Boutique bakery · Rotorua</p><h1>Artisan baking.<br /><em>Made for sharing.</em></h1><p className="hero-intro">Handcrafted in Rotorua with New Zealand-grown ingredients. Baked fresh. Shared often.</p><div className="hero-actions"><a className="button button-gold" href={`${SHOP}/collections/catering-collection`}>Order for your occasion <ArrowRight /></a><a className="button button-outline" href={`${SHOP}/collections/artisanal-breads`}>Explore today’s bake</a></div><div className="lead-time"><Clock aria-hidden="true" weight="light" /><span>Orders may require 24–48 hours depending on product.</span></div></div>
        <div className="hero-image"><img src={asset("premium-sourdough-hero.png")} alt="Golden artisan sourdough with croissants and wheat in warm bakery light" /></div>
      </section>

      <main id="main">
        <section id="catering" className="category-grid" aria-label="Shop by category">{categories.map((category) => (
          <article className="category-card" key={category.title}><a className="category-image" href={category.href} aria-label={`Shop ${category.title}`}><img src={category.image} alt={category.alt} /></a><div className="category-copy"><span className="eyebrow">{category.eyebrow}</span><h2>{category.title}</h2><p>{category.copy}</p><ArrowLink href={category.href}>Explore</ArrowLink></div></article>
        ))}</section>

        <section id="shop" className="collection-showcase section-pad">
          <div className="collection-intro"><span className="eyebrow rule-label">Explore the pantry</span><h2>Something beautiful<br /><em>for every table.</em></h2><p>Browse a taste of today’s menu, then continue to Pantry d’Or to view every option and place your order.</p></div>
          <div className="collection-tabs" role="tablist" aria-label="Product collections">{collections.map((collection) => (
            <button key={collection.id} type="button" role="tab" aria-selected={activeCollection === collection.id} aria-controls={`collection-panel-${collection.id}`} id={`collection-tab-${collection.id}`} className={activeCollection === collection.id ? "is-active" : ""} onClick={() => setActiveCollection(collection.id)}><span>{collection.tab}</span><small>{collection.count}</small></button>
          ))}</div>
          <div className="collection-stage" id={`collection-panel-${selectedCollection.id}`} role="tabpanel" aria-labelledby={`collection-tab-${selectedCollection.id}`} key={selectedCollection.id}>
            <a className="collection-visual" href={selectedCollection.href}><img src={selectedCollection.image} alt={selectedCollection.alt} /><div className="collection-visual-copy"><span className="eyebrow">{selectedCollection.eyebrow}</span><h3>{selectedCollection.title}</h3><p>{selectedCollection.copy}</p><span className="collection-view">View full collection <ArrowRight aria-hidden="true" weight="light" /></span></div></a>
            <div className="collection-menu"><div className="collection-menu-heading"><span>Popular choices</span><small>Current menu preview</small></div>{selectedCollection.products.map((product, index) => (
              <article className="menu-product" key={product.title}><a href={product.href}><span className="menu-index">{String(index + 1).padStart(2, "0")}</span><span className="menu-product-copy"><strong>{product.title}</strong><small>{product.copy}</small></span><span className="menu-price">{product.price}</span></a><button type="button" onClick={() => addItem({ ...product, image: selectedCollection.image })} aria-label={`Add ${product.title} to demo cart`}><Plus aria-hidden="true" /></button></article>
            ))}<ArrowLink className="collection-all-link" href={selectedCollection.href}>See all {selectedCollection.count}</ArrowLink></div>
          </div>
        </section>

        <section id="craft" className="craft-story"><div className="craft-image"><img src={asset("artisan-breads.png")} alt="An abundant display of Pantry d'Or artisan sourdough loaves" /></div><div className="craft-copy"><span className="eyebrow rule-label">Our craft</span><h2><em>Flour. Water. Salt.</em></h2><p>These three ingredients alone, in the right hands, have the power to sustain life. The rest is care, time and respect for the ingredients.</p><p>We bake in small batches using New Zealand-grown flour and local produce, supporting the community that supports us.</p><ArrowLink href={`${SHOP}/pages/about-us`}>Our story</ArrowLink></div></section>

        <section className="values-strip" aria-label="Pantry d'Or values"><div><Leaf weight="light" /><span>Locally sourced</span><p>Supporting growers and producers.</p></div><div><Grains weight="light" /><span>Handcrafted</span><p>Small batches, baked with care.</p></div><div><UsersThree weight="light" /><span>Made for sharing</span><p>Food that brings people together.</p></div><div><Clock weight="light" /><span>Open every day</span><p>6:00am–2:30pm.</p></div></section>

        <section id="visit" className="visit-section"><div className="visit-copy"><span className="eyebrow rule-label">Visit us in Rotorua</span><h2>From our kitchen.<br /><em>To your table.</em></h2><p>Drop in for the daily bake, or plan ahead for a platter made to bring people together.</p><div className="visit-details"><div><Clock aria-hidden="true" weight="light" /><p>Open 7 days<br /><strong>6:00am–2:30pm</strong></p></div><div><MapPin aria-hidden="true" weight="light" /><p>201 Ranolf Street<br /><strong>Glenholme, Rotorua 3010</strong></p></div></div><ArrowLink className="gold-link" href="https://maps.google.com/?q=201+Ranolf+Street+Rotorua+3010">Get directions</ArrowLink></div><div className="visit-image"><img src={asset("catering.jpg")} alt="Pantry d'Or catering platter featuring bread, cheeses, fruit and charcuterie" /><div className="image-note"><span>Order ahead</span><p>Lead time varies by product. We’ll confirm the details with you.</p></div></div></section>

        <section className="contact-strip" aria-label="Contact information"><a href="tel:+6473470231"><Phone weight="light" /><span><small>Call us</small>(07) 347 0231</span></a><a href="mailto:orders@pantrydor.co.nz"><EnvelopeSimple weight="light" /><span><small>Email us</small>orders@pantrydor.co.nz</span></a><div><Clock weight="light" /><span><small>Order enquiries</small>24–48 hours may be required</span></div><a href="https://www.instagram.com/pantry_dor/"><InstagramLogo weight="light" /><span><small>Follow our bakes</small>@pantry_dor</span></a></section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><img src={asset("pantrydor-crest-transparent.png")} alt="Pantry d'Or Boutique Bakery" /><p>Crafted with care by the team behind Lime Cafe.</p></div><nav aria-label="Footer navigation"><a href="#shop">Shop</a><a href="#catering">Catering</a><a href="#craft">Our craft</a><a href="#visit">Visit</a></nav><div className="socials"><a href="https://www.facebook.com/Pantrydorboutiquebakery" aria-label="Facebook"><FacebookLogo /></a><a href="https://www.instagram.com/pantry_dor/" aria-label="Instagram"><InstagramLogo /></a></div><div className="legal"><span>© 2026 Pantry d’Or Boutique Bakery</span><a href={`${SHOP}/policies/privacy-policy`}>Privacy</a><a href={`${SHOP}/policies/terms-of-service`}>Terms</a></div></footer>
      <CartDrawer open={cartOpen} items={items} onClose={() => setCartOpen(false)} updateQuantity={updateQuantity} />
    </div>
  );
}

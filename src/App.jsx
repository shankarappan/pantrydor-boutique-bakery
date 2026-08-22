import { useEffect, useState } from "react";
import {
  ArrowRight, Clock, EnvelopeSimple, FacebookLogo, InstagramLogo, Leaf, List,
  Grains, MapPin, Minus, Phone, Plus, ShoppingBag, UsersThree, X,
} from "@phosphor-icons/react";

const SHOP = "https://pantrydor.co.nz";
const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

const categories = [
  { eyebrow: "Catering & events", title: "Made for the table", copy: "Platters, bundles and beautiful food for offices, celebrations and everything in between.", image: asset("catering.jpg"), alt: "Pantry d'Or catering platter with bread, fruit, cheese and charcuterie", href: `${SHOP}/collections/catering-collection` },
  { eyebrow: "Pantry To Go", title: "Lunch, beautifully packed", copy: "Fresh lunches and everyday favourites, packed and ready when you are.", image: asset("lunches.jpg"), alt: "Pantry d'Or packed lunch display", href: `${SHOP}/collections/pantry-packed-lunches` },
  { eyebrow: "Artisan breads", title: "The daily bake", copy: "Sourdoughs, croissants and seasonal bakes, handcrafted in small batches.", image: asset("artisan-breads.png"), alt: "Fresh artisan sourdough loaves at Pantry d'Or", href: `${SHOP}/collections/artisanal-breads` },
];

const products = [
  { title: "Premium Corporate Package", price: "$343", copy: "A complete premium spread, ready for meetings and team gatherings.", image: asset("fruit-platter.jpg"), alt: "Fresh seasonal fruit platter", href: `${SHOP}/products/premium-corporate-package` },
  { title: "Morning Tea Complete Bundle", price: "$239", copy: "Sweet, savoury and seasonal — everything a memorable morning tea needs.", image: asset("morning-tea.jpg"), alt: "Assorted Pantry d'Or morning tea platter", href: `${SHOP}/products/morning-tea-complete-bundle` },
  { title: "Plain Sourdough", price: "$10", copy: "A crisp crust, open crumb and the quiet flavour of a true everyday loaf.", image: asset("plain-sourdough.jpg"), alt: "Pantry d'Or plain sourdough loaf", href: `${SHOP}/products/sesame-barley-sourdough` },
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
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

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
        <div className="hero-image"><img src={asset("build-1-hero.png")} alt="Artisan sourdough loaves with fresh catered salads and olives" /></div>
        <div className="hero-scroll"><span>Discover</span><span className="scroll-line" /></div>
      </section>

      <main id="main">
        <section id="catering" className="category-grid" aria-label="Shop by category">{categories.map((category) => (
          <article className="category-card" key={category.title}><a className="category-image" href={category.href} aria-label={`Shop ${category.title}`}><img src={category.image} alt={category.alt} /></a><div className="category-copy"><span className="eyebrow">{category.eyebrow}</span><h2>{category.title}</h2><p>{category.copy}</p><ArrowLink href={category.href}>Explore</ArrowLink></div></article>
        ))}</section>

        <section id="shop" className="featured section-pad">
          <div className="featured-intro"><span className="eyebrow rule-label">Selected for you</span><h2>Made today.<br /><em>Ready for you.</em></h2><p>A few customer favourites, made in small batches every day.</p><ArrowLink href={`${SHOP}/collections`}>View the full menu</ArrowLink></div>
          <div className="product-grid">{products.map((product) => (
            <article className="product-card" key={product.title}><a className="product-image" href={product.href}><img src={product.image} alt={product.alt} /></a><div className="product-heading"><h3><a href={product.href}>{product.title}</a></h3><span>{product.price}</span></div><p>{product.copy}</p><div className="product-actions"><ArrowLink href={product.href}>View details</ArrowLink><button type="button" onClick={() => addItem(product)} aria-label={`Add ${product.title} to demo cart`}><Plus aria-hidden="true" /></button></div></article>
          ))}</div>
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

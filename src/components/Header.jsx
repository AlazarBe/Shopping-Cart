import { Link } from "react-router-dom";
function Header({ carts }) {
  return (
    <>
      <header className="topbar">
        <div className="topbar__inner">
          <div className="brand" aria-label="ShopCart brand">
            <div className="brand__mark">S</div>
            <span>ShopCart</span>
          </div>

          <nav className="nav" aria-label="Main navigation">
            <Link to="/">Home</Link>
            <Link to="/">Shop</Link>
            <Link to="/cart" className="nav__cart">
              Cart ({carts.length})
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;

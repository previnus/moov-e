import {NavLink} from "react-router-dom"

const Header = () => {
    return ( 
        <nav>
            <h2>Logo</h2>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/trending">Trending</NavLink>
                <NavLink to="/whatsnew">What's New</NavLink>
                <NavLink to="/pricing">Pricing</NavLink>
                <NavLink to="/contact">Contact</NavLink>

            </div>
        </nav>
     );
}
 
export default Header;
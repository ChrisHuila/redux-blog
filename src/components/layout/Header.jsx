import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="bg-dark">
            <Link to={"/search"} className="btn btn-primary">
                <i className="bi bi-search" ></i>
            </Link>
        </header>
      );
}
 
export default Header;
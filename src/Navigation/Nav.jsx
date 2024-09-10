import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({query,handleInputChange}) => {
  console.log(handleInputChange,"query");
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Enter your search shoes."
        />
      </div>
      
    </nav>
  );
};

export default Nav;

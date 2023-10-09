import { Link } from "react-router-dom";
// Link makes it buttery smooth
const Footer = () => (
  // using () instead of {} here because we are returning one line
  <footer>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/yourmatches">Your Matches</Link>
        </li>
        <li>
          <Link to="/connect">Connect</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;

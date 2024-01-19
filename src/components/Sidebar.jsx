import { useState } from "react";
import { InputGroup, FormControl, Button, Navbar, Nav } from "react-bootstrap";
import { FaHome, FaBookOpen } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState();

  const search = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "SET_SEARCH_RESULTS", payload: data.data });
      } else {
        console.log("Richiesta fallita");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearSearch = () => {
    setQuery("");
    dispatch({ type: "CLEAR_SEARCH_RESULTS" });
  };

  const change = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Navbar expand="md" fixed="left" className="d-none d-md-flex">
      <Link className="navbar-brand" to="/">
        <img src="/assets/logo/Spotify_Logo.png" alt="Spotify_Logo" width={131} height={40} className="mt-3" />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="align-items-baseline">
        <Nav className="flex-column">
          <Link className="nav-link" to="/">
            <FaHome size={24} /> Home
          </Link>
          <Link className="nav-link" to="/library">
            <FaBookOpen size={24} /> Your Library
          </Link>
          <InputGroup>
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              value={query}
              onChange={change}
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={search}>
              GO
            </Button>
          </InputGroup>
          <InputGroup className="mt-2">
            <Button variant="outline-secondary" id="button-addon2" onClick={clearSearch}>
              CLEAR
            </Button>
          </InputGroup>
        </Nav>
      </Navbar.Collapse>
      <div className="nav-btn">
        <Button className="btn" id="signup-btn">
          Sign Up
        </Button>
        <Button className="btn" id="login-btn">
          Login
        </Button>
        <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
      </div>
    </Navbar>
  );
};
export default Sidebar;

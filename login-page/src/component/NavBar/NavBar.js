import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./NavBar.css";

const NavBarComponent = () => {

    return (
        <div>

            <Navbar bg="light" expand="lg">
                <Container>
                            <Navbar.Brand href="/">
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUFHCz///8ACyF0eX4AAAAAAA0AABwAEyX5+voAFihMVV2TmJ0vPEgAABHV19nKy80AABkNIjJdZGqmqq6ZnqIAFCYAABYADCEAAAdPWGDf4eKgpKh8gogqNkEFHS0iMDw7RlHBw8aIjZOwtLccLDpyd31DTVZMVl9ob3Xp6us7zEt+AAAC6klEQVR4nO3c+3KiMBSAcUIBpda2duWitfXWi77/C647/WvHY3c2DeeYzPd7Ar4BSQKSLAMAAAAAAAAAAMC1686NrI8pqJcnQUqJ+Y0T9NaHFZBYOC6sDysgCuNHYfwojB+F8aMwfhTGj8L4URg/CuNHYfwojB+F8aMwfhTGj8L4pf/+MHudCawPCgBwbUaBNU1tnfS39eI2rI/N+rUq+2nVWad9kec0PzZebueHunhsrPsGK/yyfN70VdKFfyJXpXHj0IWnC3bXm/7VcfhC546bNvFC53aGC06dQre3S1QqNEzUKnTzMvVC95SnXjg2Ghf1Ct1+mnqhezNZdGgW7k0Gfs1CZ/JLVC1cWdxOVQsfLMbE7t2Nw/ou0eRtQVeE1m5W9xcKF4l8MtbkxUI+lRPzFX8w+UxM3FouFAPLP6TCZUqv7fqtUDhOqbBbSCfxyh4W/0wlFa4NEpvHc0GmHv1SKLzTf0Tc3P46twuRWD4IhR/6heKs7T7E7GoqFuoP+cqFnxSGR6E/CrVQ6I9CLRT6o1ALhf4o1EKhPwq1UOiPQi0U+qNQC4X+KNRCoT8KtVDoj0ItFPqjUAuF/ijUQqE/CrVQ6I9CLRT6o1ALhf4o1EKhPwq1UOiPQi0U+qNQC4X+KNRCoT8KtVDor1vNzzzf6X/Lnb8PVZh11TmDj9W7g1B4TGnX+ZG49YHR1mqDaDZS4eFKdsgNoZ5JhcuULtNW3EjmOaFEcfsK5/alxX1vEO1eLHTjyayYtsIN/0dMtjNbyYUnx4f9fBKWyY5t2cXCASwtdmzrL209NoQws6X/lO9SL8yqb7fJS6HwcZ564YVBP6VCcQWVVGFWbFMvvDR1S6iwHh0TL8yaXOcs2hVmdX9hBp5M4em3uFC4Uk0Ls65fDd5oW3gaGIuD9Bg3ocLTeSzzm+2AZ9K+8CRvi/Vhsr0/DjGXM1kfCuquasu+nOZv67uwXq7t4U8dnHURAAAAAAAAAAAA/u03uEtoQf1iC7QAAAAASUVORK5CYII="
                                    alt="LeewayLogo"
                                    width="45"
                                    height="45"
                                    className="d-inline-block"
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Link to="/" className="m-2 link">Home</Link>
                                    <Link to="/Login" className="m-2 link">Login</Link>
                                    <Link to="/Signup" className="m-2 link">SignUp</Link>
                                    <Link to="/Contactus" className="m-2 link">Contact Us</Link>
                                </Nav>
                            </Navbar.Collapse>
                </Container>
            </Navbar>

            <div>
            </div>
        </div>
    )
}

export default NavBarComponent;
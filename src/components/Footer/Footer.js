import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="http://www.pedropbazzo.com.br">
             Pedro P. Bazzo
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="http://www.pedropbazzo.com.br">
              Sobre nós
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="http://pedropbazzo.com.br">
              Blog
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} feito com{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a
            href="http://www.pedropbazzo.com.br"
            target="_blank"
          >
            Pedro P. Bazzo
          </a>{" "}
          para uma web melhor
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

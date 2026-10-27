import type { JSX } from "react";
import { Container, Navbar, Nav, ButtonGroup, Button } from "react-bootstrap";
import styles from "./SiteNavbar.module.css";

// I don't think these are going to get used
interface ButtonProps {
  id: number;
  text: string;
  href: string;
}

interface ButtonGroupProps {
  id: number;
  buttons: ButtonProps[];
}

interface SiteNavbarProps {
  groups: ButtonGroupProps[];
  active_group: number;
  active_button: number;
}

export function SiteNavbar({ props }: NavBarProps): JSX.Element {
  return (
    <>
      <Navbar data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/">maelrawn dot dev</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Professional</Nav.Link>
            <Nav.Link href="/personal/overview">Personal</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

import React from "react";
import { Navbar, Container } from "react-bootstrap";

function NavbarMain() {
	return (
		<div>
			<Navbar className="navbar-bg" expand="lg">
				<Container>
					<Navbar.Brand href="#home">Players Data</Navbar.Brand>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavbarMain;

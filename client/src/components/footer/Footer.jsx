import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Footer() {
	const year = new Date().getFullYear();

	return (
		<div>
			<Navbar className="navbar-bg footer" expand="lg">
				<Container className="justify-content-center py-3">
					<small className="footer-text">
						deriscode<span>&copy;</span>
						{year}
					</small>
				</Container>
			</Navbar>
		</div>
	);
}

export default Footer;

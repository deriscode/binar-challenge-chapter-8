import React from "react";
import { Button, Container } from "react-bootstrap";

function ButtonsAction({ handleShow }) {
	return (
		<div>
			<Container className="d-flex justify-content-center">
				<Button variant="primary" onClick={handleShow}>
					Add New Player
				</Button>
			</Container>
		</div>
	);
}

export default ButtonsAction;

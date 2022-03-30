import React from "react";
import { Button, Container } from "react-bootstrap";
import "./ButtonsAction.css";

function ButtonsAction({ handleShowAddModal, handleShowSearchModal }) {
	return (
		<div>
			<Container className="d-flex justify-content-center my-4">
				<Button variant="add" onClick={handleShowAddModal} size="md" className="mx-3">
					Add New Player
				</Button>
				<Button variant="search" onClick={handleShowSearchModal} size="md" className="mx-3">
					Search Player
				</Button>
			</Container>
		</div>
	);
}

export default ButtonsAction;

import React from "react";
import { Button, Modal } from "react-bootstrap";

function DeletePlayer({ show, handleClose, deletePlayer, username }) {
	return (
		<div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Delete Player's Information</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Are you sure want to <strong>delete</strong> {username}?
				</Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={deletePlayer}>
						Delete
					</Button>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default DeletePlayer;

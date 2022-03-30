import React from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

function EditPlayer({ show, handleClose, username, email, experience, setUsername, setEmail, setExperience, editPlayer }) {
	return (
		<div>
			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Edit Player</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<FloatingLabel controlId="floatingInput" label="Username">
								<Form.Control
									type="text"
									placeholder="Username"
									autoFocus
									required
									value={username}
									onChange={(e) => {
										setUsername(e.target.value);
									}}
								/>
							</FloatingLabel>
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
							<FloatingLabel controlId="floatingInput" label="Email">
								<Form.Control
									type="email"
									placeholder="Email"
									required
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
							</FloatingLabel>
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
							<FloatingLabel controlId="floatingInput" label="Experience">
								<Form.Control
									type="number"
									placeholder="Experience"
									value={experience}
									onChange={(e) => {
										console.log(Number(e.target.value));
										setExperience(Number(e.target.value));
									}}
								/>
							</FloatingLabel>
						</Form.Group>
						<Button variant="primary" onClick={editPlayer} className="my-3">
							Save Changes
						</Button>
						<Button variant="secondary" onClick={handleClose} className="mx-4 my-3">
							Close
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default EditPlayer;

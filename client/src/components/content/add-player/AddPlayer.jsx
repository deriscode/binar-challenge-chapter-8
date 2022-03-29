import React, { useState } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

function AddPlayer({ show, handleClose, players, setPlayers }) {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [experience, setExperience] = useState("");
	const [lvl, setLvl] = useState("");

	const addNewPlayer = (username, email, experience) => {
		const id = players.length === 0 ? 1 : players[players.length - 1].id + 1;
		const newPlayer = {
			id,
			username,
			email,
			experience,
			lvl: experience ? Math.floor(experience / 1000) : null,
		};

		const listPlayers = [...players, newPlayer];
		setPlayers(listPlayers);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (username && email) {
			addNewPlayer(username, email, experience);
			setUsername("");
			setEmail("");
			setExperience("");
		}
	};

	return (
		<div>
			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Add New Player</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<FloatingLabel controlId="floatingInput" label="Username">
								<Form.Control
									type="text"
									placeholder="Username"
									autoFocus
									required
									value={username.trim()}
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
									value={email.trim()}
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
										setExperience(e.target.value);
									}}
								/>
							</FloatingLabel>
						</Form.Group>
						<Button variant="primary" type="submit" onClick={handleClose} className="my-3">
							Add Player
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

export default AddPlayer;

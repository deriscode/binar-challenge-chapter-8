import React, { useState } from "react";
import { Button, Modal, Form, FloatingLabel, Container } from "react-bootstrap";

function AddPlayer({ show, handleClose, players, setPlayers }) {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [experience, setExperience] = useState("");

	const addNewPlayer = (username, email, experience) => {
		// pengecekan jika data player kosong, id player baru adalah 1
		// jika ada data player, id player terakhir ditambah 1 untuk membuat id-nya player baru
		const id = players.length === 0 ? 1 : players[players.length - 1].id + 1;
		const newPlayer = {
			id,
			username: username.toLowerCase(),
			email: email.toLowerCase(),
			experience: Number(experience) ? Number(experience) : 0,
			lvl: Number(experience) ? Math.floor(Number(experience) / 1000) : 0,
		};

		const listPlayers = [...players, newPlayer];
		setPlayers(listPlayers);
		localStorage.setItem("playersData", JSON.stringify(listPlayers));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (username && email) {
			addNewPlayer(username, email, experience);
			setUsername("");
			setEmail("");
			setExperience("");
			handleClose();
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
										console.log(Number(e.target.value));
										setExperience(Number(e.target.value));
									}}
								/>
							</FloatingLabel>
						</Form.Group>
						<Container className="d-flex justify-content-center">
							<Button variant="primary" type="submit" className="my-3">
								Add Player
							</Button>
							<Button variant="secondary" onClick={handleClose} className="mx-4 my-3">
								Close
							</Button>
						</Container>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default AddPlayer;

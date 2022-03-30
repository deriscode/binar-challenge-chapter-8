import React from "react";
import { Button, Container, FloatingLabel, Form, Modal, Row, Col } from "react-bootstrap";

function SearchPlayer({ show, handleClose, setFilter, filter }) {
	return (
		<div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Search Player</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<FloatingLabel controlId="floatingInput" label="Search by username">
								<Form.Control
									type="text"
									placeholder="Search by username"
									autoFocus
									onChange={(e) => {
										setFilter({ ...filter, username: e.target.value.toLowerCase() });
									}}
								/>
							</FloatingLabel>
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
							<FloatingLabel controlId="floatingInput" label="Search by email">
								<Form.Control
									type="email"
									placeholder="Search by email"
									onChange={(e) => {
										setFilter({ ...filter, email: e.target.value.toLowerCase() });
									}}
								/>
							</FloatingLabel>
						</Form.Group>
						<Row className="mb-3">
							<Form.Group as={Col} controlId="exampleForm.ControlInput3">
								<FloatingLabel controlId="floatingInput" label="Search by experience">
									<Form.Control
										type="number"
										placeholder="Search by experience"
										onChange={(e) => {
											setFilter({ ...filter, experience: e.target.value });
										}}
									/>
								</FloatingLabel>
							</Form.Group>
							<Form.Group as={Col} controlId="exampleForm.ControlInput4">
								<FloatingLabel controlId="floatingInput" label="Search by lvl">
									<Form.Control
										type="number"
										placeholder="Search by lvl"
										onChange={(e) => {
											setFilter({ ...filter, lvl: e.target.value });
										}}
									/>
								</FloatingLabel>
							</Form.Group>
						</Row>
						<Container className="d-flex justify-content-center">
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
						</Container>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default SearchPlayer;

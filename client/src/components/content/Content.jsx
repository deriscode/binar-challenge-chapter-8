import React, { useState } from "react";
import "./Content.css";
import { Container } from "react-bootstrap";
import TableContent from "./table-content/TableContent";
import AddPlayer from "./add-player/AddPlayer";

function Content() {
	const [players, setPlayers] = useState([]);

	const [showAddModal, setShowAddModal] = useState(false);
	const handleCloseAddModal = () => setShowAddModal(false);
	const handleShowAddModal = () => setShowAddModal(true);

	return (
		<div>
			<Container className="contents">
				<TableContent players={players} handleShow={handleShowAddModal} />
			</Container>
			<AddPlayer show={showAddModal} handleClose={handleCloseAddModal} players={players} setPlayers={setPlayers} />
		</div>
	);
}

export default Content;

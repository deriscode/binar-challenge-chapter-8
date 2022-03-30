import React, { useState } from "react";
import "./Content.css";
import { Container } from "react-bootstrap";
import TableContent from "./table-content/TableContent";
import AddPlayer from "./add-player/AddPlayer";

function Content() {
	// const [players, setPlayers] = useState(
	// 	new Array(4).fill(null).map((data, index) => {
	// 		const key = index + 1;
	// 		return {
	// 			id: key,
	// 			username: "oke " + key,
	// 			email: `oke${key}@email.com`,
	// 			experience: 5000,
	// 			lvl: 5000 / 1000,
	// 		};
	// 	})
	// );

	const dataFromLocalStorage = localStorage.getItem("playersData");
	const [players, setPlayers] = useState(dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : []);

	// modal untuk add player
	const [showAddModal, setShowAddModal] = useState(false);
	const handleCloseAddModal = () => setShowAddModal(false);
	const handleShowAddModal = () => setShowAddModal(true);

	return (
		<div>
			<Container className="contents">
				<TableContent players={players} setPlayers={setPlayers} handleShow={handleShowAddModal} />
			</Container>
			<AddPlayer show={showAddModal} handleClose={handleCloseAddModal} players={players} setPlayers={setPlayers} />
		</div>
	);
}

export default Content;

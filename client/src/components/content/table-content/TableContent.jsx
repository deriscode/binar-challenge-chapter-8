import React, { useState } from "react";
import "./TableContent.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ButtonsAction from "./buttons-action/ButtonsAction";

import { FaEdit, FaTrash } from "react-icons/fa";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditPlayer from "./edit-player/EditPlayer";
import DeletePlayer from "./delete-player/DeletePlayer";

function TableContent({ players, handleShowAddModal, setPlayers, handleShowSearchModal }) {
	const [currentId, setCurrentId] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [experience, setExperience] = useState("");

	// menampilkan modal form untuk edit
	const [showEditModal, setShowEditModal] = useState(false);
	const handleCloseEditModal = () => setShowEditModal(false);
	const handleShowEditModal = (id, username, email) => {
		setCurrentId(id);
		setUsername(username);
		setEmail(email);
		setShowEditModal(true);
	};

	const editPlayer = () => {
		const playerList = [...players];
		const index = playerList.findIndex((item) => item.id === currentId);
		playerList[index].username = username ? username : playerList[index].username;
		playerList[index].email = email ? email : playerList[index].email;
		playerList[index].experience = experience
			? playerList[index].experience + Number(experience)
			: playerList[index].experience;
		playerList[index].lvl = Math.floor(playerList[index].experience / 1000);
		setPlayers(playerList);
		setExperience("");
		// console.log(playerList[index].experience); >> check exp itu number atau bukan
		localStorage.setItem("playersData", JSON.stringify(playerList));
		setShowEditModal(false);
	};

	// menampilkan modal untuk konfirmasi delete player
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const handleCloseDeleteModal = () => setShowDeleteModal(false);
	const handleShowDeleteModal = (id, username) => {
		setCurrentId(id);
		setUsername(username);
		setShowDeleteModal(true);
	};

	const deletePlayer = () => {
		const playerDelete = players.filter((item) => item.id !== currentId);
		setPlayers(playerDelete);
		localStorage.setItem("playersData", JSON.stringify(playerDelete));
		setShowDeleteModal(false);
	};

	const columns = [
		{
			dataField: "id",
			text: "No",
		},
		{
			dataField: "username",
			text: "Username",
		},
		{
			dataField: "email",
			text: "Email",
		},
		{
			dataField: "experience",
			text: "Experience",
		},
		{
			dataField: "lvl",
			text: "lvl",
		},
		{
			dataField: "",
			text: "Setting",
			formatter: (cell, row) => {
				return (
					<div>
						<OverlayTrigger
							placement="left"
							delay={{ show: 150, hide: 300 }}
							overlay={<Tooltip>Edit Player</Tooltip>}
						>
							<Button
								variant="none"
								onClick={() => {
									handleShowEditModal(row.id, row.username, row.email);
								}}
							>
								<FaEdit color="#fcbd3a" fontSize={25} />
							</Button>
						</OverlayTrigger>

						<OverlayTrigger
							placement="right"
							delay={{ show: 150, hide: 300 }}
							overlay={<Tooltip>Delete Player</Tooltip>}
						>
							<Button
								variant="none"
								onClick={() => {
									handleShowDeleteModal(row.id, row.username);
								}}
							>
								<FaTrash color="#da291c" fontSize={25} />
							</Button>
						</OverlayTrigger>
					</div>
				);
			},
		},
	];

	const options = {
		paginationSize: 3,
		sizePerPageList: [
			{
				text: "5",
				value: 5,
			},
			{
				text: "10",
				value: 10,
			},
		],
	};

	return (
		<div>
			<h1 className="text-center my-4 table-title">Player List</h1>
			<ButtonsAction
				handleShowAddModal={handleShowAddModal}
				handleShowSearchModal={handleShowSearchModal}
			/>
			<BootstrapTable
				keyField="id"
				data={players}
				columns={columns}
				pagination={paginationFactory(options)}
			/>
			<EditPlayer
				show={showEditModal}
				handleClose={handleCloseEditModal}
				username={username}
				email={email}
				experience={experience}
				setUsername={setUsername}
				setEmail={setEmail}
				setExperience={setExperience}
				editPlayer={editPlayer}
			/>
			<DeletePlayer
				show={showDeleteModal}
				handleClose={handleCloseDeleteModal}
				deletePlayer={deletePlayer}
				username={username}
			/>
		</div>
	);
}

export default TableContent;

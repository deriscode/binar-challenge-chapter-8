import React, { useEffect, useState } from "react";
import "./Content.css";
import { Container } from "react-bootstrap";
import TableContent from "./table-content/TableContent";
import AddPlayer from "./add-player/AddPlayer";
import SearchPlayer from "./search-player/SearchPlayer";

function Content() {
	const dataFromLocalStorage = localStorage.getItem("playersData");
	const [players, setPlayers] = useState(dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : []);

	// modal untuk add player
	const [showAddModal, setShowAddModal] = useState(false);
	const handleCloseAddModal = () => setShowAddModal(false);
	const handleShowAddModal = () => setShowAddModal(true);

	// modal untuk search player
	const [showSearchModal, setShowSearchModal] = useState(false);
	const handleCloseSearchModal = () => setShowSearchModal(false);
	const handleShowSearchModal = () => setShowSearchModal(true);

	const [filter, setFilter] = useState({
		username: "",
		email: "",
		experience: "",
		lvl: "",
	});

	const [filteredPlayers, setFilteredPlayers] = useState([]);

	const filteredSearch = () => {
		const { username, email, experience, lvl } = filter;
		if (username && email && experience && lvl) {
			setFilteredPlayers(
				players.filter(
					(item) => item.username === username && item.email === email && item.experience === Number(experience) && item.lvl === Number(lvl)
				)
			);
		} else if (username) {
			setFilteredPlayers(players.filter((item) => item.username === username));
		} else if (email) {
			setFilteredPlayers(players.filter((item) => item.email === email));
		} else if (experience) {
			setFilteredPlayers(players.filter((item) => item.experience === Number(experience)));
		} else if (lvl) {
			setFilteredPlayers(players.filter((item) => item.lvl === Number(lvl)));
		} else {
			setFilteredPlayers(players);
		}
	};

	useEffect(() => {
		filteredSearch();
	}, [filter, players]);

	return (
		<div>
			<Container className="contents">
				<TableContent
					players={filteredPlayers}
					setPlayers={setPlayers}
					handleShowAddModal={handleShowAddModal}
					handleShowSearchModal={handleShowSearchModal}
				/>
			</Container>
			<AddPlayer show={showAddModal} handleClose={handleCloseAddModal} players={players} setPlayers={setPlayers} />
			<SearchPlayer show={showSearchModal} handleClose={handleCloseSearchModal} setFilter={setFilter} filter={filter} />
		</div>
	);
}

export default Content;

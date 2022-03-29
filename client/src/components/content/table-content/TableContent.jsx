import React from "react";
import "./TableContent.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ButtonsAction from "./buttons-action/ButtonsAction";

function TableContent({ players, handleShow }) {
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
			{
				text: "15",
				value: 15,
			},
		],
	};

	return (
		<div>
			<ButtonsAction handleShow={handleShow} />
			<h1 className="text-center my-4 table-title">Player List</h1>
			<BootstrapTable keyField="id" data={players} columns={columns} pagination={paginationFactory(options)} />
		</div>
	);
}

export default TableContent;

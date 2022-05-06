import React from "react";
import "./debitCard.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { debitCards } from "../../db";
import Sidebar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";

const DebitCard = () => {
  //Since delivery adresses is an array, we initiate the array.
  const [data, setData] = useState(debitCards);

  //This function handles delete on clicking taking the id as param.
  const handleDelete = (id) => {
    //We delete this particular id.
    console.log(id);
    let afterDelete = data.filter((item) => item.id !== id);
    console.log("Card Deleted");
    //Set the array after deelte.
    setData(afterDelete);
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    {
      field: "type",
      headerName: "Name",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.type}
          </div>
        );
      },
    },
    {
      field: "cardNo",
      headerName: "Card Number",
      width: 180,
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "expiry",
      headerName: "Expiry",
      width: 200,
    },
    //We basically render some icons and buttons here.
    {
      field: "action",
      headerName: "Action",
      width: 280,
      renderCell: (params) => {
        return (
          <>
            <button
              className="userListEdit"
              onClick={() => handleDelete(params.row.id)}
              style={{ backgroundColor: "rgb(235, 83, 83)" }}
            >
              DELETE from Debit Card where id = {params.row.id}
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div className="container">
      {/* Rendering the side bar having all components */}
      <TopBar />
      <Sidebar />
      <div className="adressList">
        <div className="userTitleContainer">
          <h1 className="userTitle">Debit Cards</h1>
          <Link to="/newDebitCard">
            <button className="userAddButton">INSERT into DebitCard</button>
          </Link>
        </div>
        {/* This is the data we are gonna render using Datagrid from materail ui */}
        <DataGrid
          GridLines="None"
          rowHeight={80}
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[5]}
          checkboxSelection
          sx={{
            boxShadow: 20,
            borderBottom: "none",
            borderRadius: 7,
          }}
        />
      </div>
    </div>
  );
};

export default DebitCard;
